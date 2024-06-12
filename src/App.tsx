import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/routes"
import Header from "@shared/components/Header"
import Footer from "@shared/components/Footer"
import ScrollToHashElement from "@shared/components/ScrollToHashElement"

function App() {

  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Header />
        <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
