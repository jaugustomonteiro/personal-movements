import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 720px) {
    width: 130%;
    table {
      font-size: 0.8rem;
      tbody tr td.td-description {
        width: auto;
      }
    }
  }

  table {
    table-layout: auto;
    width: 100%;
    border-collapse: collapse;
    color: var(--light-white);
    thead tr th {
      text-align: left;
      padding: 1rem 0.5rem 1rem 0.5rem;
    }
    tbody tr {
      border-bottom: 1px solid var(--light-white);
    }
    tbody tr td {
      padding: 1rem 0.5rem 0.5rem 0.5rem;
      &.td-value {
        display: flex;
        justify-content: space-between;
      }
    }

    .config {
      text-align: center;
      button {
        background: transparent;
        border: none;
        font-size: 1.2rem;
        filter: brightness(50%);
        transition: filter 0.5s;
        svg {
          fill: var(--light-white);
        }
        &:hover {
          filter: brightness(100%);
        }
      }
    }
  }
`;
