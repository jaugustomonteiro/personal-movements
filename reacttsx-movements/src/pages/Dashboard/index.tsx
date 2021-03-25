import React, { useContext } from 'react';
import AddMovement from '../../components/AddMovement';
import Balance from '../../components/Balance';
import Modal from '../../components/Modal';
import ListMovements from '../../components/ListMovements';
import Movements from '../../components/Movements';
import { MovementsContext } from '../../contexts/MovementContext';
import { Header, Section, Wrapper } from './styled';

const Dashboard: React.FC = () => {
  const { isOpenModal } = useContext(MovementsContext);

  return (
    <>
      <Wrapper>
        <Header>
          <div className="avatar">
            <img
              src="https://avatars.githubusercontent.com/u/62663309?s=460&u=d483cef98b904811c74cba522f00ecd9cd4053b2&v=4"
              alt="Avatar"
            />
            <div>
              <strong>Augusto Monteiro</strong>
              <span>WebDesign</span>
            </div>
          </div>
          <Balance />
          <Movements />
        </Header>
        <Section>
          <ListMovements />
        </Section>
        <AddMovement />
      </Wrapper>
      {isOpenModal && <Modal />}
    </>
  );
};

export default Dashboard;
