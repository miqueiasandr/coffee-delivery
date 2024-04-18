import { styled } from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 16rem;
  padding: 0 0.75rem;
  align-items: center;
  text-align: center;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme['base-card']};

  header {
    img {
      width: 100px;
      height: 100px;
      margin-top: -1.25rem;
    }

    p {
      margin: 0.75rem auto 0;
      width: fit-content;
      font-size: 0.625rem;
      font-weight: bold;
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
    }
  }

  h1 {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subTitle']};
  }

  > p {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-label']};
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 2.0625rem auto 1.5rem;
  max-width: 13rem;

  span {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-text']};

    p {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  section {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
      display: flex;
      gap: 0.25rem;
      align-items: center;
      border-radius: 6px;
      padding: 0.5rem;
      background: ${(props) => props.theme['base-button']};

      svg {
        color: ${(props) => props.theme.purple};
        cursor: pointer;
      }
    }

    > svg {
      color: ${(props) => props.theme['base-card']};
      background: ${(props) => props.theme['purple-dark']};
      height: 2.375rem;
      width: 2.375rem;
      padding: 0.5rem;
      border-radius: 6px;
      cursor: pointer;
    }
  }
`
