import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { ActionsContainer, NavbarContainer } from './styles'

export function Navbar() {
  return (
    <NavbarContainer>
      <img src={Logo} alt="Copo de café" />
      <ActionsContainer>
        <div>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </div>
        <div>
          <ShoppingCart weight="fill" size={22} />
        </div>
      </ActionsContainer>
    </NavbarContainer>
  )
}
