import { endOfMonth, format, startOfMonth } from 'date-fns';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatDate } from '../utils/helpers';

interface MovementsContextProps {
  children: ReactNode;
}

interface BalanceData {
  inflow: number;
  outflow: number;
  total: number;
}

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

interface MovementsContextData {
  balance: BalanceData | undefined;
  movements: MovementData[];
  beginDate: string;
  endDate: string;
  isOpenModal: boolean;
  setBeginDate: (date: string) => void;
  setEndDate: (date: string) => void;
  searchRangerMovement: () => void;
  toogleModal: () => void;
  loadingMovements: any;
}

const MovementsContext = createContext({} as MovementsContextData);

function MovementsProvider({ children }: MovementsContextProps) {
  const currencyDate = new Date();

  const [balance, setBalance] = useState<BalanceData>();
  const [movements, setMovements] = useState<MovementData[]>([]);
  const [beginDate, setBeginDate] = useState(format(startOfMonth(currencyDate), 'dd/MM/yyyy'));
  const [endDate, setEndDate] = useState(format(endOfMonth(currencyDate), 'dd/MM/yyyy'));
  const [isOpenModal, setIsOpenModal] = useState(false);

  function toogleModal(): void {
    setIsOpenModal(!isOpenModal);
  }

  function loadingMovements(movement: MovementData) {
    setMovements([...movements, movement]);
  }

  useEffect(() => {
    api
      .get('/movements', {
        params: {
          date_initial: formatDate(beginDate),
          date_final: formatDate(endDate),
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
        setMovements(response.data.movements);
      });
  }, [beginDate, endDate]);

  async function searchRangerMovement() {
    //alert(JSON.stringify({ beginDate, endDate }));
    const response = await api.get('/movements', {
      params: {
        date_initial: formatDate(beginDate),
        date_final: formatDate(endDate),
      },
    });
    setBalance(response.data.balance);
    setMovements(response.data.movements);
  }

  return (
    <MovementsContext.Provider
      value={{
        balance,
        movements,
        beginDate,
        endDate,
        setBeginDate,
        setEndDate,
        searchRangerMovement,
        isOpenModal,
        toogleModal,
        loadingMovements,
      }}
    >
      {children}
    </MovementsContext.Provider>
  );
}

export { MovementsContext, MovementsProvider };
