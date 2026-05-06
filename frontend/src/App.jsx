import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import AddProduct from "./pages/AddProduct"
import MyProducts from "./pages/MyProducts"
import Layout from "./Layout"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Rota pai: Carrega o Layout fixo (Sidebar + Header) */}
        <Route path="/" element={<Layout />}>
          
          {/* Rotas filhas: O conteúdo delas entra automaticamente dentro do <Outlet /> */}
          <Route index element={<Dashboard />} /> {/* path "/" padrão */}
          <Route path="add-product" element={<AddProduct />} />
          <Route path="meus-produtos" element={<MyProducts />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App