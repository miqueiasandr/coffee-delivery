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
  type: string[]
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
  const [coffees /* setCoffees */] = useState([
    {
      id: 1,
      img: Expresso,
      type: ['TRADICIONAL'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      value: 9.9,
    },
    {
      id: 2,
      img: ExpressoAmericano,
      type: ['TRADICIONAL'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 9.9,
    },
    {
      id: 3,
      img: ExpressoCremoso,
      type: ['TRADICIONAL'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      value: 9.9,
    },
    {
      id: 4,
      img: ExpressoGelado,
      type: ['TRADICIONAL', 'GELADO'],
      name: 'Expresso Americano',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      value: 9.9,
    },
    {
      id: 5,
      img: CafeComLeite,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      value: 9.9,
    },
    {
      id: 6,
      img: Latte,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      value: 9.9,
    },
    {
      id: 7,
      img: Capuccino,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      value: 9.9,
    },
    {
      id: 8,
      img: Macchiato,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      value: 9.9,
    },
    {
      id: 9,
      img: Mocaccino,
      type: ['TRADICIONAL', 'COM LEITE'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      value: 9.9,
    },
    {
      id: 10,
      img: ChocolateQuente,
      type: ['ESPECIAL', 'COM LEITE'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      value: 9.9,
    },
    {
      id: 11,
      img: Cubano,
      type: ['ESPECIAL', 'ALCÓOLICO', 'GELADO'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      value: 9.9,
    },
    {
      id: 12,
      img: Havaiano,
      type: ['ESPECIAL'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      value: 9.9,
    },
    {
      id: 13,
      img: Arabe,
      type: ['ESPECIAL'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      value: 9.9,
    },
    {
      id: 14,
      img: Irlandes,
      type: ['ESPECIAL', 'ALCÓOLICO'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      value: 9.9,
    },
  ])

  return (
    <CoffeeContext.Provider value={{ coffees }}>
      {children}
    </CoffeeContext.Provider>
  )
}
