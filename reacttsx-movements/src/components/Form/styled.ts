import styled from 'styled-components';

export const FormContainer = styled.form`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      margin-bottom: 0.5rem;
    }
    button.close-modal {
      background: transparent;
      height: 2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      color: var(--light-white);
      &:hover svg {
        color: white;
        & {
          transition: all 0.5s;
        }
      }
    }
  }

  label {
    font-size: 80%;
    margin-bottom: 0.3rem;
  }
  input {
    padding: 0 0.65rem;
    border-radius: 0.4rem;
    height: 2.3rem;
    border: 0;
  }
  select {
    padding: 0 0.65rem;
    border-radius: 0.4rem;
    height: 2.3rem;
    border: 0;
  }
  span {
    font-size: 55%;
    font-weight: 600;
    font-style: italic;
    color: var(--red);
    margin-top: 0.3rem;
    height: 0.5rem;
    margin-bottom: 0.5rem;
  }
  div.single-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0.5rem;
  }

  div.double-input {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 0.5rem;
    }
  }

  button.send-movement {
    width: 100%;
    margin-top: 1rem;
    background: var(--green);
    border: 0;
    padding: 0.65rem;
    border-radius: 0.4rem;
    font-weight: bold;
    color: var(--light-green);
    transition: filter 0.3s;
    &:hover {
      filter: brightness(80%);
    }
  }

  .movement-message {
    margin-top: 1rem;
    overflow: hidden;
    position: relative;
    height: 2rem;
    &.active div {
      top: -0;
    }

    svg {
      margin-right: 0.5rem;
    }

    div {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: -2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #7f9d8e;
      color: #ffffff;
      font-weight: bold;
      font-size: 85.5%;
      transition: top 0.3s ease-out;
    }
  }
`;
