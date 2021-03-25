import React, { useContext } from 'react';
import { Container } from './styled';
import { FaSearch } from 'react-icons/fa';
import InputMask from 'react-input-mask';
import { MovementsContext } from '../../contexts/MovementContext';
import { formatValue } from '../../utils/helpers';

const Balance: React.FC = () => {
  const {
    balance,
    beginDate,
    endDate,
    setBeginDate,
    setEndDate,
    searchRangerMovement,
  } = useContext(MovementsContext);

  function handleSearch() {
    searchRangerMovement();
  }

  return (
    <Container>
      <div>
        <span>Saldo</span>
        <strong>{balance && formatValue(balance.total)}</strong>
      </div>
      <div>
        <InputMask
          mask="99/99/9999"
          value={beginDate}
          onChange={(e) => setBeginDate(e.target.value)}
        />
        <InputMask
          mask="99/99/9999"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
    </Container>
  );
};

export default Balance;
