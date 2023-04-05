import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 700px;
  padding: 20px;

  h1 {
    color: #333;
    cursor: pointer;
  }

  svg {
    font-size: 26px;
  }

  div {
    cursor: pointer;
    position: relative;
  }
`;

export const CartCount = styled.strong`
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 12px;
  min-width: 18px;
  min-height: 18px;
  padding: 2px;
  background: #18a6a8;
  color: #fff;
  text-align: center;
  border-radius: 50%;
`;
