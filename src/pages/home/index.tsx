import { BannerContainer, BoxTextBannerContainer } from './styles'
import BannerImage from '../../assets/BannerImage.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <BannerContainer>
      <BoxTextBannerContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <div>
          <span>
            <ShoppingCart weight="fill" size={16} />
            Compra simples e segura
          </span>
          <span>
            <Package weight="fill" size={16} />
          </span>
          <span>
            <Timer weight="fill" size={16} />
          </span>
          <span>
            <Coffee weight="fill" size={16} />
          </span>
        </div>
      </BoxTextBannerContainer>

      <img src={BannerImage} alt="Copo de café bem grande" />
    </BannerContainer>
  )
}
