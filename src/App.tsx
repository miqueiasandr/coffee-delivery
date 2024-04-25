import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Navbar } from './components/navbar'
import { CoffeeContextProvider } from './Context/CoffeeContext'
import { ShoppingCartContextProdiver } from './Context/ShoppingCart'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <ShoppingCartContextProdiver>
            <Navbar />
            <Router />
          </ShoppingCartContextProdiver>
        </CoffeeContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
