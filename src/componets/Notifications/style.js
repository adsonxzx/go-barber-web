import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';
import 'react-perfect-scrollbar/dist/css/styles.css';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  border: 0;
  background: none;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background: #ff892e;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  top: calc(100% + 26px);
  left: calc(50% - 130px);
  display: ${props => (props.active ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.6);
  width: 260px;
  border-radius: 4px;
  padding: 20px 5px;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 15px);
    top: -15px;
    height: 0;
    width: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 280px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    margin-bottom: 7px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
    display: block;
    margin-bottom: 5px;
  }

  button {
    border: 0;
    background: none;
    font-size: 12px;
    color: ${lighten(0.2, '#7159c1')};
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        height: 8px;
        width: 8px;
        display: inline-block;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 5px;
      }
    `}
`;
