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
  div + div {
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};

    svg {
      color: ${(props) => props.theme.yellow};
    }
  }
`
