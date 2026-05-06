import { api } from "../services/productService";
import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react"
import { getProducts, deleteProduct } from "../services/productService"
import { useNavigate } from "react-router-dom" // <-- Importado para navegação suave

function MyProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // <-- Inicializando o hook de navegação

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
        prevProducts.filter((product) => product.id !== id)
      )
    } catch (error) {
      console.error("Erro ao deletar produto:", error)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* TOPO */}
      <div className="flex items-center justify-between">
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
          <select className="bg-[#0f172a] border border-[#1e293b] text-white px-4 py-2 rounded-lg outline-none">
            <option>Todas</option>
          </select>

          {/* BOTÃO */}
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
            onClick={() => navigate("/add-product")} // <-- Atualizado para usar SPA navigation
          >
            + Novo
          </button>
        </div>
      </div>

      {/* GRID DE PRODUTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-2">
        {products.map((product, index) => (
          <ProductCard
            key={product.id || index}
            imageUrl={product.imageUrl || "https://via.placeholder.com/300"}
            name={product.name}
            price={product.price}
            change={product.change || 0}
            oldPrice={product.oldPrice || ""}
            onDelete={() => handleDeleteProduct(product.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default MyProducts