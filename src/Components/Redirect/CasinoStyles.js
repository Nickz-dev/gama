import styled from 'styled-components';

export const CasinoSection = styled.div`
  padding: 30vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export const CasinoCard = styled.div`
  margin: 10px auto;
  text-align: center;
  color: #000;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;

