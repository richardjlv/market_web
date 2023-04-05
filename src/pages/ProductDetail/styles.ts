import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 900px;
  padding: 20px;

  img {
    max-width: 500px;
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  div {
    width: 100%;
    max-width: 300px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    span {
      color: #666;
    }

    h1 {
      font-size: 26px;
      color: #333;
      margin: 10px 0px;
    }

    strong {
      font-size: 16px;
      color: #333;
    }

    p {
      margin-top: 20px;
    }
  }

  button {
    background: #18a6a8;
    color: #fff;
    border: 0;
    border-radius: 20px;
    overflow: hidden;
    margin: 20px 0 0;
    transition: background 0.2s;
    padding: 10px 20px;
  }

  button:hover {
    background: #058d8f;
  }
`;
