import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import StatCard from "../components/StatCard"

function Dashboard() {
    return(
        <div className="flex min-h-screen bg-[#020617]">
            <Sidebar />
            
            <div className="flex-1 p-6">
               <Header />

               <div className="grid grid-cols-3 gap-6 mt-6">
                    <StatCard title="Total Products" value="12" color="bg-blue-500" />
                    <StatCard title="Price Drops" value="3" color="bg-green-500"/>
                    <StatCard title="Price Increases" value="2" color="bg-red-500"/>    
               </div>
            </div>

        </div>
    )
}

export default Dashboard