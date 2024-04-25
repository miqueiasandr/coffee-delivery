import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  max-width: 70rem;
  margin: 0 auto;
  grid-template-columns: 40rem 28rem;
  column-gap: 2rem;
  row-gap: 1rem;
  margin-top: 2.5rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subTitle']};
  }
`
export const FormContainer = styled.div`
  > div {
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    padding: 2.5rem;

    header {
      display: flex;
      column-gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['yellow-dark']};
      }

      h4 {
        color: ${(props) => props.theme['base-subTitle']};
        font-weight: 400;
      }

      p {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
      }
    }

    section {
      display: grid;
      row-gap: 1rem;
      margin-top: 2rem;

      div {
        display: grid;
        grid-template-columns: 200px 1fr;
        column-gap: 0.75rem;
      }

      div + div {
        display: grid;
        grid-template-columns: 200px 1fr 60px;
        column-gap: 0.75rem;
      }

      input {
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme['base-button']};
        background-color: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-text']};
        outline: 0;

        &:focus {
          border: 1px solid ${(props) => props.theme['yellow-dark']};
        }

        &::placeholder {
          color: ${(props) => props.theme['base-label']};
          font-size: 0.875rem;
        }
      }
    }
  }

  > div + div {
    margin-top: 0.75rem;
    header {
      display: flex;
      column-gap: 0.5rem;

      svg {
        color: ${(props) => props.theme.purple};
      }

      h4 {
        color: ${(props) => props.theme['base-subTitle']};
        font-weight: 400;
      }

      p {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
      }
    }
  }
`

export const PaymentTypesContainer = styled.div`
  display: flex;
  column-gap: 0.75rem;
  margin-top: 2rem;
  justify-content: center;

  label {
    display: flex;
    flex: 1;
    column-gap: 0.75rem;
    justify-content: center;
    padding: 1rem;
    border-radius: 6px;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-button']};
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
  input {
    display: none;

    &:checked + label {
      background: ${(props) => props.theme['purple-light']};
      outline: 1px solid ${(props) => props.theme.purple};
    }
  }
`

export const OrderListContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
    width: 100%;
    margin-top: 1.25rem;
    border: 0;
    border-radius: 6px;
    font-weight: bold;
    font-size: 0.875rem;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};
    cursor: pointer;
  }
`

export const SelectedCoffees = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    height: 4rem;
    width: 4rem;
  }
  span {
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }

  > div {
    display: flex;
    gap: 1.25rem;

    section {
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;

      h4 {
        color: ${(props) => props.theme['base-subTitle']};
        font-weight: 400;
      }

      > div {
        display: flex;
        gap: 0.5rem;

        div {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          border-radius: 6px;
          gap: 0.5rem;
          color: ${(props) => props.theme['base-title']};
          background: ${(props) => props.theme['base-button']};

          svg {
            color: ${(props) => props.theme['purple-dark']};
            cursor: pointer;
            transition: 0.1s;

            &:hover {
              color: ${(props) => props.theme.purple};
            }
          }
        }

        button {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          border: 0;
          border-radius: 6px;
          padding: 0 0.5rem;
          color: ${(props) => props.theme['base-text']};
          background: ${(props) => props.theme['base-button']};
          cursor: pointer;
          transition: 0.1s;

          &:hover {
            background: ${(props) => props.theme['base-hover']};
          }

          svg {
            color: ${(props) => props.theme.purple};
            transition: 0.1s;

            &:hover {
              color: ${(props) => props.theme['purple-dark']};
            }
          }
        }
      }
    }
  }
`

export const ValuesContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
    }

    span {
      color: ${(props) => props.theme['base-text']};
    }

    h2 {
      font-weight: bold;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subTitle']};
    }
  }

  div + div + div {
    span {
      font-weight: bold;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subTitle']};
    }
  }
`
