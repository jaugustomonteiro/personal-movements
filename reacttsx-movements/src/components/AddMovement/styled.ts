import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    background: transparent;
    height: 64px;
    width: 64px;
    background: var(--green);
    color: var(--light-grey);
    border-radius: 50%;
    filter: brightness(40%);
    transition: filter 0.5s;
    font-size: 1.5rem;

    &:hover {
      filter: brightness(100%);
    }
  }
`;
