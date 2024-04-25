import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeeContainer, FooterContainer } from './styles'
import { Coffee, CoffeeContext } from '../../../../Context/CoffeeContext'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../../../Context/ShoppingCart'

export function CoffeeCard(data: Coffee) {
  const { addCoffeeToCart } = useContext(ShoppingCartContext)
  const { increaseAmountCoffee, decreaseAmountCoffee } =
    useContext(CoffeeContext)

  const priceValue = Number(data.value) * data.quantity

  return (
    <CoffeeContainer key={data.id}>
      <header>
        <img src={data.img} alt="" />
        <div>
          {data.type.map((type) => {
            return <p key={type}>{type}</p>
          })}
        </div>
      </header>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <FooterContainer>
        <span>
          R$<p>{priceValue.toFixed(2)}</p>
        </span>

        <section>
          <div>
            <Minus onClick={() => decreaseAmountCoffee(data.id)} />
            {data.quantity}
            <Plus onClick={() => increaseAmountCoffee(data.id)} />
          </div>
          <ShoppingCart
            size={22}
            weight="fill"
            onClick={() => addCoffeeToCart(data.id)}
          />
        </section>
      </FooterContainer>
    </CoffeeContainer>
  )
}
