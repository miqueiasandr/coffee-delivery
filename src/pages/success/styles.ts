import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 70rem;
  margin: 5rem auto 0;

  > div {
    h1 {
      color: ${(props) => props.theme['yellow-dark']};
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
    }

    > p {
      margin-top: 0.25rem;
      color: ${(props) => props.theme['base-subTitle']};
      font-size: 1.25rem;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  margin-top: 2.5rem;
  justify-content: space-between;

  > div {
    border-radius: 6px 36px 6px 36px;
    width: 32.875rem;
    padding: 2.5rem;
    position: relative;
    background-color: ${(props) => props.theme['base-card']};

    display: flex;
    flex-direction: column;
    gap: 2rem;

    &::after {
      content: '';
      position: absolute;
      width: 100.5%;
      height: 100.5%;
      position: absolute;
      background-image: linear-gradient(to bottom right, #dbac2c, #8047f8);
      z-index: -1;
      inset: -0.25%;
      border-radius: inherit;
    }
  }

  img {
    width: 492px;
    height: 293px;
  }
`
const IconSuccess = styled.div`
  display: flex;
  align-items: center;

  p {
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
    margin-left: 0.75rem;
    font-size: 1rem;
  }

  span {
    position: relative;
    padding: 0.5rem;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      width: 2rem;
      height: 2rem;
      top: 0;
      left: 0;
      border-radius: 50%;
      z-index: -1;
    }
  }

  svg {
    color: ${(props) => props.theme.background};
  }
`

export const IconSuccessMapin = styled(IconSuccess)`
  span {
    &::before {
      background-color: ${(props) => props.theme.purple};
    }
  }
`

export const IconSuccessTimer = styled(IconSuccess)`
  span {
    &::before {
      background-color: ${(props) => props.theme.yellow};
    }
  }
`

export const IconSuccessMoney = styled(IconSuccess)`
  span {
    &::before {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
