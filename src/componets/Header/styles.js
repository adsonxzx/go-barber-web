import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > nav {
    display: flex;
    align-items: center;

    img {
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      color: #7159c1;
      font-weight: bold;
      text-transform: uppercase;
      padding: 10px 20px;
    }
  }

  > aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-left: 1px solid #eeee;
  margin-left: 20px;

  div {
    text-align: right;

    strong {
      text-transform: capitalize;
      display: block;
      color: #333;
    }

    a {
      margin-top: 5px;
      display: block;
      color: #868585;
      font-size: 12px;
      padding: 0 5px;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
    margin-left: 15px;
  }
`;
