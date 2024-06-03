import { BrowserRouter } from "react-router-dom"
import AppContainer from "./shared/components/AppContainer"
import AppRoutes from "./routes/routes"
import Header from "@shared/components/Header"
import Footer from "@shared/components/Footer"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <AppContainer>
        <AppRoutes />
      </AppContainer>
      <Footer />
    </BrowserRouter>
  )
}

export default App
