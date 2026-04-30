import { BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import AddProduct from "./pages/AddProduct"
import MyProducts from "./pages/MyProducts"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/meus-produtos" element={<MyProducts />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
