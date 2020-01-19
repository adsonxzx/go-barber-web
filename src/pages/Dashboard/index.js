import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  isBefore,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isEqual,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';

import api from '../../services/api';
import { Content } from '../../styles/global';
import { Header, AppointmentList, Appointment } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedules() {
      const response = await api.get(`/schedules`, {
        params: {
          date,
        },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedules();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Content>
      <Header>
        <button type="button">
          <MdChevronLeft color="#fff" size={36} onClick={handlePrevDay} />
        </button>
        <span>{dateFormatted}</span>
        <button type="button">
          <MdChevronRight color="#fff" size={36} onClick={handleNextDay} />
        </button>
      </Header>

      <AppointmentList>
        {schedule.map(({ past, appointment, time }) => (
          <Appointment key={time} past={past} available={!appointment}>
            <time>{time}</time>
            <span>{appointment ? appointment.user.name : 'Em Aberto'}</span>
          </Appointment>
        ))}
      </AppointmentList>
    </Content>
  );
}
