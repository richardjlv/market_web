import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 auto;

  &:after {
    content: ' ';
    display: block;
    width: 16px;
    height: 16px;
    margin: -1px;
    border-radius: 50%;
    border: 3px solid #18a6a8;
    border-color: #18a6a8 transparent #18a6a8 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
