import { styled } from 'styled-components'

export const NavbarContainer = styled.nav`
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.25rem;

    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['purple-light']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
  a {
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
    height: 38px;
    width: 38px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${(props) => props.theme.yellow};
    }

    span {
      position: absolute;
      top: -20%;
      right: -20%;
      background: red;
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 0.75rem;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
