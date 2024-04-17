import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  margin: 0 auto;
  max-width: 70rem;
`

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5.75rem;
`

export const BoxTextBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.75rem;

  div {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 900;
      font-size: 3rem;
      line-height: 1.3;

      color: ${(props) => props.theme['base-title']};
    }

    h2 {
      margin-top: 1rem;
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subTitle']};
      line-height: 1.3;
      font-weight: 400;
    }
  }

  > div + div {
    margin-top: 4.125rem;
    display: grid;
    grid-template-columns: 14.4275rem 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
  }
`

export const IconsBannerBase = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    position: relative;
    padding: 0.5rem;

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

    svg {
      color: ${(props) => props.theme.background};
    }
  }
`

export const IconBannerShoppingCart = styled(IconsBannerBase)`
  span {
    &::before {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
export const IconBannerTimer = styled(IconsBannerBase)`
  span {
    &::before {
      background: ${(props) => props.theme.yellow};
    }
  }
`
export const IconBannerPackage = styled(IconsBannerBase)`
  span {
    &::before {
      background: ${(props) => props.theme['base-text']};
    }
  }
`
export const IconBannerCoffee = styled(IconsBannerBase)`
  span {
    &::before {
      background: ${(props) => props.theme.purple};
    }
  }
`
