import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 720px) {
    .movement {
      span {
        font-size: 1.2rem !important;
      }
    }
  }

  .movement {
    padding: 1.25rem;
    position: relative;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1.25rem;
    }

    span {
      font-size: 2rem;
      margin-top: 0.5rem;
    }

    svg {
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      font-size: 3rem;
    }
  }

  .inflow {
    background: var(--green);
  }

  .outflow {
    background: var(--red);
  }
`;
