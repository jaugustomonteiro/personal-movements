import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    background: var(--light-black);
    color: var(--light-white);
    width: 100%;
    max-width: 600px;
    margin: 0 1.5rem;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    position: relative;
    display: flex;
    flex-direction: column;

    button[type='submit'] {
      background: var(--green);
      padding: 0.8rem;
      border-radius: 0.4rem;
      border: 0;
      transition: all 0.5s;
      margin: 1rem 0;
      font-size: 110%;
      font-weight: 600;
      color: var(--light-white);
      &:hover {
        filter: grayscale(40%);
      }
    }
  }
`;

export const FormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--light-white);
  padding: 1rem 0rem 1rem 0rem;
  font-weight: 600;
  font-size: 110%;
  button {
    border: 0;
    background: transparent;
    transition: fill 0.5s;

    svg {
      fill: var(--white);
    }

    &:hover svg {
      fill: var(--light-white);
    }
  }
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  input,
  select {
    width: 100%;
    padding: 0 0.6rem;
    border-radius: 0.4rem;
    border: 0;
    height: 2.3rem;
  }
  span {
    color: var(--red);
    font-weight: bold;
    font-style: italic;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
    font-size: 80%;
    height: 1rem;
  }
`;

export const FormInput = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
`;

export const FormInputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
  }
`;
