import { ReactNode, createContext, useContext, useReducer } from 'react'
import { CoffeeContext, Coffee } from '../Context/CoffeeContext'
import { produce } from 'immer'

interface ShoppingCartContextData {
  shoppingCart: Coffee[]
  addCoffeeToCart: (id: number) => void
  increaseCoffeeQuantityInCart: (id: number) => void
  decreaseCoffeeQuantityInCart: (id: number) => void
  removeCoffeeFromShoppingCart: (id: number) => void
  shoppingCartTotalValue: () => string
}

interface ShoppingCartContextProdiverProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData)
export function ShoppingCartContextProdiver({
  children,
}: ShoppingCartContextProdiverProps) {
  const { coffees, resetAmountCoffee } = useContext(CoffeeContext)

  const [shoppingCart, dispatch] = useReducer(
    (state: Coffee[], action: any) => {
      switch (action.type) {
        case 'ADD_TO_CART':
          return produce(state, (draft) => {
            const coffeeToAddIndex = coffees.findIndex((coffee) => {
              return coffee.id === action.payload.id
            })

            if (coffeeToAddIndex < 0) {
              return state
            }

            const coffeeInCartIndex = state.findIndex((coffee) => {
              return coffee.id === coffees[coffeeToAddIndex].id
            })

            if (coffeeInCartIndex < 0) {
              draft.push(coffees[coffeeToAddIndex])
            } else {
              draft[coffeeInCartIndex].quantity =
                coffees[coffeeToAddIndex].quantity +
                draft[coffeeInCartIndex].quantity
            }
          })

        case 'INCREASE_COFFEE_QUANTITY':
          return produce(state, (draft) => {
            const coffeeIndex = state.findIndex((coffee) => {
              return coffee.id === action.payload.id
            })

            if (coffeeIndex < 0) {
              return state
            }

            draft[coffeeIndex].quantity++
          })

        case 'DECREASE_COFFEE_QUANTITY':
          return produce(state, (draft) => {
            const coffeeIndex = state.findIndex((coffee) => {
              return coffee.id === action.payload.id
            })

            if (coffeeIndex < 0) {
              return state
            }

            if (draft[coffeeIndex].quantity === 1) {
              return state
            } else {
              draft[coffeeIndex].quantity--
            }
          })

        case 'REMOVE_COFFEE':
          return produce(state, (draft) => {
            const coffeeIndex = state.findIndex((coffee) => {
              return coffee.id === action.payload.id
            })

            if (coffeeIndex < 0) {
              return state
            } else {
              draft.splice(coffeeIndex, 1)
            }
          })

        default:
          return state
      }
    },
    [],
  )

  function addCoffeeToCart(id: number) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id,
      },
    })

    resetAmountCoffee(id)
  }

  function increaseCoffeeQuantityInCart(id: number) {
    dispatch({
      type: 'INCREASE_COFFEE_QUANTITY',
      payload: {
        id,
      },
    })
  }

  function decreaseCoffeeQuantityInCart(id: number) {
    dispatch({
      type: 'DECREASE_COFFEE_QUANTITY',
      payload: {
        id,
      },
    })
  }

  function removeCoffeeFromShoppingCart(id: number) {
    dispatch({
      type: 'REMOVE_COFFEE',
      payload: {
        id,
      },
    })
  }

  function shoppingCartTotalValue() {
    const total = shoppingCart.reduce((total, coffee) => {
      return total + Number(coffee.value) * coffee.quantity
    }, 0)

    return total.toFixed(2)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addCoffeeToCart,
        increaseCoffeeQuantityInCart,
        decreaseCoffeeQuantityInCart,
        removeCoffeeFromShoppingCart,
        shoppingCartTotalValue,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
