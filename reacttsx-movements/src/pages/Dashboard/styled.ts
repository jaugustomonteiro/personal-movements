import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--light-black);
  max-width: 900px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  position: relative;
`;

export const Container = styled.div``;

export const Header = styled.header`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;

  div.avatar {
    display: flex;
    margin-bottom: 1rem;
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      strong {
        font-size: 1.5rem;
      }

      span {
        font-size: 1.1rem;
      }
    }
  }
`;

export const Section = styled.section`
  flex-grow: 1;
  padding: 0.5rem;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--light-yellow);
    border-radius: 0.3rem;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--yellow);
    border-radius: 0.3rem;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--light-yellow);
  }
`;
