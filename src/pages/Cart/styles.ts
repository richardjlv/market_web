import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 0 20px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 20px;
    color: #555;
    margin-bottom: 10px;
    margin-right: auto;
  }

  strong {
    color: #333;
  }
`;

export const ItemContainer = styled.div`
  max-width: 100px;
  width: 100%;
`;

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 10px;

  span {
    width: 100px;
    font-size: 14px;
    color: #444;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  width: 100%;

  img {
    width: 100px;
    height: auto;
    border-radius: 5px;
    background: #eee;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  > div {
    width: 100px;
  }

  span {
    width: 100px;
    font-size: 16px;
  }

  strong {
    width: 100px;
  }
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 10px;

  svg {
    color: #18a6a8;
    margin: 0 5px;
  }

  svg:hover {
    cursor: pointer;
    color: #18a6a8;
  }

  p {
    margin: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding: 5px;
  }
`;

export const CartDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  margin: 10px auto;
  margin-right: 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  span {
    font-size: 16px;
  }

  strong {
    font-size: 20px;
  }
`;
