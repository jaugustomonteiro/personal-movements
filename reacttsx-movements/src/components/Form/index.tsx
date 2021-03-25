import { TargetElement } from '@testing-library/user-event';
import { ChangeEvent, FormEvent, useCallback, useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoBagCheckOutline } from 'react-icons/io5';
import { MovementsContext } from '../../contexts/MovementContext';
import { api } from '../../services/api';
import { FormContainer } from './styled';

interface TypeTransaction {
  [key: string]: string;
}

interface ErrorsData {
  [key: string]: string;
}

export const Form: React.FC = () => {
  const { toogleModal, searchRangerMovement } = useContext(MovementsContext);

  const [description, setDescription] = useState('');
  const [transaction, setTransaction] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [expire_date, setExpire_date] = useState('');
  const [paid_account, setPaid_account] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const [errors, setErrors] = useState<ErrorsData>({});

  const typeTransaction: TypeTransaction = {
    'credit card': 'outflow',
    'account debit': 'outflow',
    'account credit': 'inflow',
  };

  const closeModal = useCallback(
    (e: FormEvent<TargetElement>) => {
      e.preventDefault();
      toogleModal();
    },
    [toogleModal]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<TargetElement>) => {
      e.preventDefault();

      const data = {
        type,
        transaction,
        description,
        value,
        expire_date,
        paid_account,
      };

      try {
        await api.post('/movements', data);
        setIsSuccess(true);
        setDescription('');
        setTransaction('');
        setType('');
        setValue('');
        setExpire_date('');
        setPaid_account('');
        searchRangerMovement();
        setErrors({});
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } catch (resErrors) {
        if (!resErrors.response) {
          return;
        }

        const err = resErrors.response.data.message.reduce((acc: ErrorsData, attr: ErrorsData) => {
          acc[attr.path] = attr.message;
          return acc;
        }, {});
        setErrors(err);
      }
    },
    [description, expire_date, paid_account, searchRangerMovement, transaction, type, value]
  );

  return (
    <FormContainer>
      <header>
        <h2>Cadastro</h2>
        <button onClick={closeModal} type="button" className="close-modal">
          <FaTimes />
        </button>
      </header>
      <hr />
      <div className="single-input">
        <label>Descrição</label>
        <input
          value={description}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Descrição"
        />
        <span>{errors.description && errors.description}</span>
      </div>
      <div className="double-input">
        <div>
          <label>Transação</label>
          <select
            value={transaction}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setType(typeTransaction[e.target.value]);
              setTransaction(e.target.value);
            }}
          >
            <option value="">Selecione um Transação</option>
            <option value="credit card">Cartão de Crédito</option>
            <option value="account debit">Débito em Conta</option>
            <option value="account credit">Crédito em Conta</option>
          </select>
          <span>{errors.transaction && errors.transaction}</span>
        </div>
        <div>
          <label>Valor</label>
          <input
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value);
            }}
            type="text"
            placeholder="Valor R$"
          />
          <span>{errors.value && errors.value}</span>
        </div>
      </div>
      <div className="double-input">
        <div>
          <label>Vencimento</label>
          <input
            value={expire_date}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setExpire_date(e.target.value);
            }}
            type="text"
            placeholder="Description"
          />
          <span>{errors.expire_date && errors.expire_date}</span>
        </div>
        <div>
          <label>Pago?</label>
          <select
            value={paid_account}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setPaid_account(e.target.value);
            }}
          >
            <option value="">Conta Paga?</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
          <span>{errors.paid_account && errors.paid_account}</span>
        </div>
      </div>
      <button className="send-movement" onClick={handleSubmit} type="submit">
        Enviar
      </button>
      <div className={`movement-message ${isSuccess && 'active'}`}>
        <div>
          <IoBagCheckOutline />
          Movement inserted with success
        </div>
      </div>
    </FormContainer>
  );
};
