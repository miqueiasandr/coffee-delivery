import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeeContainer, FooterContainer } from './styles'

interface CoffeeCardProps {
  id: number
  img: string
  type: string
  name: string
  description: string
  value: number
}

export function CoffeeCard(data: CoffeeCardProps) {
  return (
    <CoffeeContainer key={data.id}>
      <header>
        <img src={data.img} alt="" />
        <p>{data.type}</p>
      </header>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <FooterContainer>
        <span>
          R$<p>{String(data.value)}</p>
        </span>

        <section>
          <div>
            <Minus />
            1
            <Plus />
          </div>
          <ShoppingCart size={22} weight="fill" />
        </section>
      </FooterContainer>
    </CoffeeContainer>
  )
}
