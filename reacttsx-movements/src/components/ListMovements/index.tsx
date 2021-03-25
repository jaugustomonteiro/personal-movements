import { format } from 'date-fns';
import { useContext } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MovementsContext } from '../../contexts/MovementContext';
import { formatValueWithoutBRL, transactions } from '../../utils/helpers';
import { Container } from './styled';

interface MovementData {
  id: string;
  type: string;
  transaction: string;
  description: string;
  value: number;
  expire_date: string;
  paid_account: string;
  created_at: string;
  updated_at: string;
}

const ListMovements = () => {
  const { movements } = useContext(MovementsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Transação</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Vencimento</th>
            <th>Pago</th>
            <th>Setup</th>
          </tr>
        </thead>
        <tbody>
          {movements &&
            movements.map((movement: MovementData) => (
              <tr key={movement.id}>
                <td>{movement.type === 'outflow' ? 'saida' : 'entrada'}</td>
                <td>{transactions[movement.transaction]}</td>
                <td className="td-description">{movement.description}</td>
                {movement.type === 'outflow' ? (
                  <td className="td-value" style={{ color: 'var(--light-red)' }}>
                    <span>R$</span> <span>-{formatValueWithoutBRL(movement.value)}</span>
                  </td>
                ) : (
                  <td className="td-value" style={{ color: 'var(--light-green)' }}>
                    <span>R$</span> <span>{formatValueWithoutBRL(movement.value)}</span>
                  </td>
                )}
                <td>{format(new Date(movement.expire_date), 'dd/MM/yyyy')}</td>
                <td>{movement.paid_account === 'true' ? 'Sim' : 'Não'}</td>

                <td className="config">
                  <button>
                    <FaRegEdit />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ListMovements;
