import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import StatCard from "../components/StatCard"
import ProductCard from "../components/ProductCard"

function Dashboard() {
    return (
        <div className="flex min-h-screen bg-[#020617]">
            <Sidebar />

            <div className="flex-1 p-6">
                <Header />

                <div className="grid grid-cols-3 gap-6 mt-6">
                    <StatCard title="Total de Produtos" value="12" color="bg-blue-500" />
                    <StatCard title="Quedas de Preço" value="3" color="bg-green-500" />
                    <StatCard title="Aumentos" value="2" color="bg-red-500" />
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6">
                <ProductCard
                    image="https://via.placeholder.com/100"
                    name="RTX 4060"
                    price="1800"
                    change={-5}
                />

                <ProductCard
                    image="https://via.placeholder.com/100"
                    name="Ryzen 5 5600"
                    price="750"
                    change={3}
                />

                <ProductCard
                    image="https://via.placeholder.com/100"
                    name="Ryzen 5 5600"
                    price="750"
                    change={3}
                />

                <ProductCard
                    image="https://via.placeholder.com/100"
                    name="Ryzen 5 5600"
                    price="750"
                    change={3}
                />

                <ProductCard
                    image="https://via.placeholder.com/100"
                    name="Ryzen 5 5600"
                    price="750"
                    change={3}
                />

                <ProductCard
                    image="https://via.placeholder.com/100"
                    name="Ryzen 5 5600"
                    price="750"
                    change={3}
                />
            </div>
            </div>

            

        </div>

    )
}

export default Dashboard