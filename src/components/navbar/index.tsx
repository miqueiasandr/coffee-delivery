import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { ActionsContainer, NavbarContainer } from './styles'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/ShoppingCart'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  const { shoppingCart } = useContext(ShoppingCartContext)

  return (
    <NavbarContainer>
      <NavLink to="/">
        <img src={Logo} alt="Copo de café" />
      </NavLink>
      <ActionsContainer>
        <div>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </div>
        <NavLink to="/checkout">
          <ShoppingCart weight="fill" size={22} />
          {shoppingCart.length ? <span>{shoppingCart.length}</span> : null}
        </NavLink>
      </ActionsContainer>
    </NavbarContainer>
  )
}
