import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 900px;
  padding: 20px;
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;
  width: 100%;

  form {
    display: flex;
    margin-right: auto;
    align-items: center;

    input {
      padding: 10px;
      border: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      background: transparent;
    }

    button {
      margin-left: 10px;
      border: 0;
      border-radius: 20px;
      padding: 8px 8px;
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.1);

      svg {
        font-size: 12px;
      }

      span {
        margin-left: 5px;
      }
    }
  }

  select {
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    background: transparent;
    letter-spacing: 1px;
    margin-left: 20px;
    text-transform: capitalize;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
`;

export const ProductItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  padding-bottom: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.2);

  img {
    align-self: center;
    max-width: 200px;
    height: auto;
  }

  span {
    color: #666;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 10px 10px 5px;
  }

  strong {
    margin: 0 10px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;

  span {
    color: #333;
    margin: auto 0 5px;
  }

  button {
    border: 0;
    background: 0;
    margin 0 10px;
    color: #18a6a8;
    transition: color 0.2s;

    svg {
      font-size: 20px;
    }
  }

  button:hover {
    color: #058d8f;
  }

  button:disabled {
    color: #ccc;
  }
`;

export const EmptyText = styled.p`
  color: #333;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 10px 10px 5px;
  text-align: center;
`;
