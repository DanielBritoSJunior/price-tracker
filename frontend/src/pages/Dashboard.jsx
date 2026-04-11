import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import StatCard from "../components/StatCard"
import ProductCard from "../components/ProductCard"
import { getProducts } from "../services/productService"
import { useEffect, useState } from "react"

function Dashboard() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts()
                setProducts(response.data)
            } catch (error) {
                console.error("Erro ao buscar produtos:", error)
            }
        };

        fetchProducts()
    }, [])

    const totalProducts = products.length
    const priceDrops = products.filter((product) => Number(product.change) < 0).length
    const priceIncreases = products.filter((product) => Number(product.change) > 0).length

    return (
        <div className="flex min-h-screen bg-[#020617]">
            <Sidebar />

            <div className="flex-1 p-6">
                <Header />

                <div className="grid grid-cols-3 gap-6 mt-6">
                    <StatCard title="Total de Produtos" value={totalProducts} color="bg-blue-500" />
                    <StatCard title="Quedas de Preço" value={priceDrops} color="bg-green-500" />
                    <StatCard title="Aumentos" value={priceIncreases} color="bg-red-500" />
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <ProductCard 
                        key={index}
                        imageUrl={product.imageUrl || "https://via.placeholder.com/300" }
                        name={product.name}
                        price={product.price}
                        change={product.change || 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard