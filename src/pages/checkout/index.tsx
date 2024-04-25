import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  CheckoutContainer,
  FormContainer,
  OrderListContainer,
  PaymentTypesContainer,
  SelectedCoffees,
  ValuesContainer,
} from './styles'
import { ShoppingCartContext } from '../../Context/ShoppingCart'
import { useContext } from 'react'

export function Checkout() {
  const {
    shoppingCart,
    increaseCoffeeQuantityInCart,
    decreaseCoffeeQuantityInCart,
    removeCoffeeFromShoppingCart,
    shoppingCartTotalValue,
  } = useContext(ShoppingCartContext)

  return (
    <CheckoutContainer>
      <h3>Complete seu pedido</h3>
      <h3>Cafés selecionados</h3>
      <FormContainer>
        <div>
          <header>
            <MapPinLine size={22} />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <section>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </section>
        </div>
        <div>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <PaymentTypesContainer>
            <input type="radio" id="credit" name="payment-mmethod" />
            <label htmlFor="credit">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </label>

            <input type="radio" id="debit" name="payment-mmethod" />
            <label htmlFor="debit">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </label>

            <input type="radio" id="money" name="payment-mmethod" />
            <label htmlFor="money">
              <Money size={16} />
              DINHEIRO
            </label>
          </PaymentTypesContainer>
        </div>
      </FormContainer>
      <OrderListContainer>
        {shoppingCart.map((coffee) => {
          return (
            <SelectedCoffees key={coffee.id}>
              <div>
                <img src={coffee.img} alt="" />
                <section>
                  <h4>{coffee.name}</h4>
                  <div>
                    <div>
                      <Minus
                        size={14}
                        onClick={() => decreaseCoffeeQuantityInCart(coffee.id)}
                      />
                      {coffee.quantity}
                      <Plus
                        size={14}
                        onClick={() => increaseCoffeeQuantityInCart(coffee.id)}
                      />
                    </div>

                    <button
                      onClick={() => removeCoffeeFromShoppingCart(coffee.id)}
                    >
                      <Trash size={16} />
                      REMOVER
                    </button>
                  </div>
                </section>
              </div>

              <span>
                R$ {Number(Number(coffee.value) * coffee.quantity).toFixed(2)}
              </span>
            </SelectedCoffees>
          )
        })}

        <ValuesContainer>
          <div>
            <p>Total de itens</p>
            <span>R$ {shoppingCartTotalValue()}</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>
          <div>
            <h2>Total</h2>
            <span>R$ {shoppingCartTotalValue()}</span>
          </div>
        </ValuesContainer>

        <button type="submit">CONFIRMAR PEDIDO</button>
      </OrderListContainer>
    </CheckoutContainer>
  )
}
