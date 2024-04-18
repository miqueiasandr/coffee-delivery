import { ReactNode, createContext, useState } from 'react'
import ExpressoAmericano from '../assets/Type=Americano.svg'
import Expresso from '../assets/Type=Expresso.svg'
import ExpressoCremoso from '../assets/Type=Expresso Cremoso.svg'
import ExpressoGelado from '../assets/Type=Café Gelado.svg'
import CafeComLeite from '../assets/Type=Café com Leite.svg'
import Latte from '../assets/Type=Latte.svg'
import Capuccino from '../assets/Type=Capuccino.svg'
import Macchiato from '../assets/Type=Macchiato.svg'
import Mocaccino from '../assets/Type=Mochaccino.svg'
import ChocolateQuente from '../assets/Type=Chocolate Quente.svg'
import Cubano from '../assets/Type=Cubano.svg'
import Havaiano from '../assets/Type=Havaiano.svg'
import Arabe from '../assets/Type=Árabe.svg'
import Irlandes from '../assets/Type=Irlandês.svg'

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface Coffee {
  id: number
  img: string
  type: []
  name: string
  description: string
  value: number
}

interface CoffeeContextData {
  coffees: Coffee[]
}

export const CoffeeContext = createContext({} as CoffeeContextData)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState([
    {
      id: 1,
      img: Expresso,
      type: 'TRADICIONAL',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      value: 9.9,
    },
    {
      id: 2,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 3,
      img: ExpressoCremoso,
      type: 'TRADICIONAL',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      value: 9.9,
    },
    {
      id: 4,
      img: ExpressoGelado,
      type: ['TRADICIONAL', 'GELADO'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 5,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 6,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 7,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 8,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 9,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 10,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 11,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 12,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 13,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 14,
      img: ExpressoAmericano,
      type: 'TRADICIONAL',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
  ])

  return (
    <CoffeeContext.Provider value={{ coffees }}>
      {children}
    </CoffeeContext.Provider>
  )
}
