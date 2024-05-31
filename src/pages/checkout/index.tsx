import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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
import { OrdersContext } from '../../Context/OrdersContext'
import { NavLink, useNavigate } from 'react-router-dom'

const newOrderValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'Um CEP válido possui 8 números.')
    .max(8, 'Um CEP válido possui 8 números.'),
  rua: zod.string().min(1, 'Sem isso nós não conseguiremos encontrar você.'),
  numero: zod.string(),
  complemento: zod.string(),
  bairro: zod
    .string()
    .min(
      1,
      'Você com certeza tem um bairro, certo? Por favor nos fale qual é.',
    ),
  cidade: zod.string().min(1, 'Em qual cidade será a entrega?'),
  uf: zod
    .string()
    .min(2, 'Precisamos apenas das iniciais do estado, obrigado.')
    .max(2, 'Precisamos apenas das iniciais do estado, obrigado.'),
  paymentMethod: zod.string(),
})

type NewOrderFormData = zod.infer<typeof newOrderValidationSchema>

export function Checkout() {
  const {
    shoppingCart,
    increaseCoffeeQuantityInCart,
    decreaseCoffeeQuantityInCart,
    removeCoffeeFromShoppingCart,
    shoppingCartTotalValue,
  } = useContext(ShoppingCartContext)

  const { addNewOrder } = useContext(OrdersContext)

  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  function createNewOrder(data: any) {
    addNewOrder(data)
    reset()
    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <h3>Complete seu pedido</h3>
      <h3>Cafés selecionados</h3>
      <FormContainer onSubmit={handleSubmit(createNewOrder)}>
        <div>
          <header>
            <MapPinLine size={22} />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <section>
            <input type="text" placeholder="CEP" {...register('cep')} />
            <input type="text" placeholder="Rua" {...register('rua')} />
            <div>
              <input type="text" placeholder="Número" {...register('numero')} />
              <input
                type="text"
                placeholder="Complemento"
                {...register('complemento')}
              />
            </div>
            <div>
              <input type="text" placeholder="Bairro" {...register('bairro')} />
              <input type="text" placeholder="Cidade" {...register('cidade')} />
              <input type="text" placeholder="UF" {...register('uf')} />
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
            <input
              type="radio"
              id="credit"
              value="Cartão de Crédito"
              {...register('paymentMethod')}
            />
            <label htmlFor="credit">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </label>

            <input
              type="radio"
              id="debit"
              value="Cartão de Débito"
              {...register('paymentMethod')}
            />
            <label htmlFor="debit">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </label>

            <input
              type="radio"
              id="money"
              value="Dinheiro"
              {...register('paymentMethod')}
            />
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
        <button onClick={handleSubmit(createNewOrder)}>CONFIRMAR PEDIDO</button>
      </OrderListContainer>
    </CheckoutContainer>
  )
}
