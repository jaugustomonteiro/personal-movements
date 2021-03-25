import { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MovementsContext } from '../../contexts/MovementContext';
import { Container } from './styled';

const AddMovement: React.FC = () => {
  const { toogleModal } = useContext(MovementsContext);
  return (
    <Container>
      <button onClick={toogleModal}>
        <FaPlus />
      </button>
    </Container>
  );
};

export default AddMovement;
