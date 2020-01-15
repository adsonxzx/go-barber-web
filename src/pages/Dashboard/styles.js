import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: none;
    border: 0;
  }

  span {
    font-size: 22px;
    color: #fff;
    margin: 0 30px;
  }
`;

export const AppointmentList = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Appointment = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 49%;
  margin-right: 2%;
  margin-bottom: 2%;
  opacity: ${props => (props.past ? '0.6' : '1')};

  &:nth-child(2n + 0) {
    margin-right: 0;
  }

  time {
    font-size: 20px;
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    margin-bottom: 5px;
  }

  span {
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
