import styled from 'styled-components';

export const Container = styled.div`
  background: var(--yellow);
  color: var(--light-black);
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    div:last-child {
      margin-top: 1rem;
    }
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      font-size: 1.25rem;
    }

    strong {
      font-size: 1.875rem;
    }
  }

  div:last-child {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 1rem;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    align-items: end;

    input {
      padding: 0.5rem;
      width: 100%;
      border: 0;
      border-radius: 0.3rem;
      background: var(--light-black);
      color: var(--light-white);
    }

    button {
      height: 2.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      border: 0;
      border-radius: 0.4rem;
      background: var(--green);
      color: var(--light-green);
      transition: filter 0.5s all;
    }

    button:hover {
      filter: brightness(80%);
    }
  }
`;
