import React, { useState, useEffect, useMemo } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdNotifications } from 'react-icons/md';
import api from '../../services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './style';

export default function Notifications() {
  const [active, setActive] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(() => notifications.some(n => n.read === false), [
    notifications,
  ]);

  async function handleBadge() {
    setActive(!active);
  }

  useEffect(() => {
    async function loadNotification() {
      try {
        const response = await api.get('/notifications');
        const data = response.data.map(notification => ({
          ...notification,
          timeDistance: formatDistance(
            parseISO(notification.createdAt),
            new Date(),
            {
              addSuffix: true,
              locale: pt,
            }
          ),
        }));
        setNotifications(data);
      } catch (error) {
        console.log(error)
      }
    }

    loadNotification();
  }, []);

  async function markAsRead(id) {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={() => handleBadge()}>
        <MdNotifications color="#7159c1" size={22} />
      </Badge>

      <NotificationList active={active}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>

              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => markAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
