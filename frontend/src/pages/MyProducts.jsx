import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react"
import { getProducts, deleteProduct  } from "../services/productService"

function MyProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id)

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id))
    } catch (error) {
      console.error("Erro ao deletar produto:", error)
    }
  }

  return (
    <div className="flex min-h-screen bg-[#020617]">
      <Sidebar />

      <div className="flex-1 p-6">
        <Header />

        {/* TOPO */}
        <div className="flex items-center justify-between mt-6">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Meus Produtos
            </h1>
            <p className="text-gray-400 text-sm">
              {products.length} produto(s) monitorado(s)
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* FILTRO */}
            <select className="bg-[#0f172a] border border-[#1e293b] text-white px-4 py-2 rounded-lg">
              <option>Todas</option>
            </select>

            {/* BOTÃO */}
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium"
              onClick={() => window.location.href = "/add-product"}
            >
              + Novo
            </button>
          </div>
        </div>

        {/* GRID DE PRODUTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              change={-5}
              onDelete={() => handleDeleteProduct(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyProducts