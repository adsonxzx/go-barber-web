import React, { useState, useMemo } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Content } from '../../styles/global';
import { Header, AppointmentList, Appointment } from './styles';

export default function Dashboard() {
  // const currentDate = format(new Date(), 'd [de] MMMM', { locale: pt });
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

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
        <Appointment past>
          <time>08:00</time>
          <span>Adson Souza</span>
        </Appointment>

        <Appointment available>
          <time>08:00</time>
          <span>Em aberto</span>
        </Appointment>

        <Appointment>
          <time>08:00</time>
          <span>Adson Souza</span>
        </Appointment>

        <Appointment>
          <time>08:00</time>
          <span>Adson Souza</span>
        </Appointment>
      </AppointmentList>
    </Content>
  );
}
