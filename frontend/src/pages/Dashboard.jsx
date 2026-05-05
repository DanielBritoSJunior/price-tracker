import StatCard from "../components/StatCard"
import ProductCard from "../components/ProductCard"
import { getProducts, deleteProduct } from "../services/productService"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

function Dashboard() {
    const [products, setProducts] = useState([])
    const location = useLocation();

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        if (location.state?.refresh) {
            fetchProducts();
        }
    }, [location.state]);

    const totalProducts = products.length
    const priceDrops = products.filter((product) => Number(product.change) < 0).length
    const priceIncreases = products.filter((product) => Number(product.change) > 0).length

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
            {/* 1. Grid das Estatísticas (Top) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total de Produtos" value={totalProducts} color="bg-blue-500" />
                <StatCard title="Quedas de Preço" value={priceDrops} color="bg-green-500" />
                <StatCard title="Aumentos" value={priceIncreases} color="bg-red-500" />
            </div>

            {/* 2. Grid dos Produtos Monitorados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
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

export default Dashboard