import React, { useContext } from 'react';
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi';
import { MovementsContext } from '../../contexts/MovementContext';
import { formatValue } from '../../utils/helpers';
import { Container } from './styled';

const Movements: React.FC = () => {
  const { balance } = useContext(MovementsContext);
  return (
    <Container>
      <div className="movement inflow">
        <strong>Entrada</strong>
        <span>{balance && formatValue(balance.inflow)}</span>
        <GiReceiveMoney />
      </div>
      <div className="movement outflow">
        <strong>Saida</strong>
        <span>{balance && formatValue(balance.outflow)}</span>
        <GiPayMoney />
      </div>
    </Container>
  );
};

export default Movements;
