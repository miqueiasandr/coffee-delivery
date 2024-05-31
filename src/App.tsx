import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Navbar } from './components/navbar'
import { CoffeeContextProvider } from './Context/CoffeeContext'
import { ShoppingCartContextProdiver } from './Context/ShoppingCart'
import { OrdersContextProvider } from './Context/OrdersContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <ShoppingCartContextProdiver>
            <Navbar />
            <OrdersContextProvider>
              <Router />
            </OrdersContextProvider>
          </ShoppingCartContextProdiver>
        </CoffeeContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
