import { BannerContainer } from './styles'
import BannerImage from '../../assets/BannerImage.png'

export function Home() {
  return (
    <BannerContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
      </div>
      <img src={BannerImage} alt="Copo de café bem grande" />
    </BannerContainer>
  )
}
