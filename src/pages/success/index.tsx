import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/Illustration.png'
import {
  SuccessContainer,
  InfoContainer,
  IconSuccessMapin,
  IconSuccessTimer,
  IconSuccessMoney,
} from './styles'
import { useContext } from 'react'
import { OrdersContext } from '../../Context/OrdersContext'

export function Success() {
  const { orders } = useContext(OrdersContext) // TERMINAR DE IMPLETAR ISSO !!
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que o pedido chegará até você</p>
      </div>

      <InfoContainer>
        <div>
          <IconSuccessMapin>
            <span>
              <MapPin weight="fill" size={16} />
            </span>
            <p>
              Entrega em
              <strong>
                {' '}
                {orders.rua}, {orders.numero}
              </strong>
              <br /> {orders.bairro}, {orders.cidade}, {orders.uf}
            </p>
          </IconSuccessMapin>

          <IconSuccessTimer>
            <span>
              <Timer weight="fill" size={16} />
            </span>
            <p>
              Previsão de entrega <br /> <strong>20 min - 30 min</strong>
            </p>
          </IconSuccessTimer>

          <IconSuccessMoney>
            <span>
              <CurrencyDollar weight="fill" size={16} />
            </span>
            <p>
              Pagamento na entnrega <br />
              <strong>{orders.paymentMethod}</strong>
            </p>
          </IconSuccessMoney>
        </div>

        <img src={illustration} alt="" />
      </InfoContainer>
    </SuccessContainer>
  )
}
