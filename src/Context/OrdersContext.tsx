import { ReactNode, createContext, useContext, useState } from 'react'
import { ShoppingCartContext } from './ShoppingCart'

interface Order {
  id: number
  cep: string
  rua: string
  numero: string | null
  complemento: string | null
  bairro: string
  cidade: string
  uf: string
  paymentMethod: string
}

interface OrdersContextData {
  orders: Order
  addNewOrder: (order: Order) => void
}

export const OrdersContext = createContext({} as OrdersContextData)

interface OrdersContextProviderProps {
  children: ReactNode
}

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const { shoppingCart, clearShoppingCart } = useContext(ShoppingCartContext)

  const [orders, setOrders] = useState<Order>({} as Order)

  function addNewOrder(order: Order) {
    const newOrder = {
      id: new Date().getTime(),
      cep: order.cep,
      rua: order.rua,
      numero: order.numero,
      complemento: order.complemento,
      bairro: order.bairro,
      cidade: order.cidade,
      uf: order.uf,
      paymentMethod: order.paymentMethod,
      coffees: shoppingCart,
    }

    if (newOrder.coffees.length === 0) {
      return alert('Você precisa adicionar pelo menos um café ao seu carrinho.')
    } else {
      setOrders(newOrder)
      clearShoppingCart()
    }
  }

  console.log(orders)

  return (
    <OrdersContext.Provider value={{ orders, addNewOrder }}>
      {children}
    </OrdersContext.Provider>
  )
}
