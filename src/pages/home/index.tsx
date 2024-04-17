import {
  BannerContainer,
  BoxTextBannerContainer,
  HomeContainer,
  IconBannerCoffee,
  IconBannerPackage,
  IconBannerShoppingCart,
  IconBannerTimer,
} from './styles'
import BannerImage from '../../assets/BannerImage.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <BoxTextBannerContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </div>

          <div>
            <IconBannerShoppingCart>
              <span>
                <ShoppingCart weight="fill" size={16} />
              </span>
              <p>Compra simples e segura</p>
            </IconBannerShoppingCart>

            <IconBannerPackage>
              <span>
                <Package weight="fill" size={16} />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </IconBannerPackage>
            <IconBannerTimer>
              <span>
                <Timer weight="fill" size={16} />
              </span>
              <p>Entrega rápida e rastreada</p>
            </IconBannerTimer>
            <IconBannerCoffee>
              <span>
                <Coffee weight="fill" size={16} />
              </span>
              <p>O café chega fresquinho até você</p>
            </IconBannerCoffee>
          </div>
        </BoxTextBannerContainer>

        <img src={BannerImage} alt="Copo de café bem grande" />
      </BannerContainer>
    </HomeContainer>
  )
}
