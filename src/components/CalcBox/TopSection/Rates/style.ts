import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: right;
  max-width: 210px;
  align-self: center;
  gap: 5px;

  @media (min-width: 768px) {
    order: 2;
    flex: none;
    width: 50%;
    max-width: none;
    gap: 10px;
  }
`;

const DollarRate = styled.div`
  display: flex;
  align-self: center;
  gap: 10px;
  align-items: center;

  @media (min-width: 768px) {
    align-self: end;
  }
`;

const DollarAmount = styled.div`
  color: ${({ theme }) => theme.main.darkText};
  font-weight: 800;
  font-size: 2.1em;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const PerMonth = styled.div`
  font-weight: 600;
  font-size: 0.95em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const CroRate = styled.div`
  font-weight: 600;
  font-size: 0.7em;

  @media (min-width: 768px) {
    font-size: 0.9em;
  }
`;

const CroAmount = styled.span`
  font-weight: 800;
  font-size: 0.95em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const SC = {
  Container,
  DollarRate,
  DollarAmount,
  PerMonth,
  CroRate,
  CroAmount
};

export default SC;
