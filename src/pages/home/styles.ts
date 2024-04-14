import { styled } from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  max-width: 70rem;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5.75rem 0;
`

export const BoxTextBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.75rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 900;
      font-size: 3rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-title']};
    }

    h2 {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subTitle']};
      line-height: 1.3;
      font-weight: 400;
    }
  }

  div + div {
    display: grid;
    grid-template-columns: 14.4375rem, 18.375rem;

    span {
      position: relative;
      svg {
        color: ${(props) => props.theme.background};
        position: relative;
        top: 8px;
        left: 8px;
      }
      &::before {
        content: '';
        position: absolute;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: ${(props) => props.theme['yellow-dark']};
        left: 0;
        top: 0;
      }
    }

    span:nth-child(2)::before {
      background: ${(props) => props.theme['base-text']};
    }
    span:nth-child(3)::before {
      background: ${(props) => props.theme.yellow};
    }
    span:nth-child(4)::before {
      background: ${(props) => props.theme.purple};
    }
  }
`
