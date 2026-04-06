import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function Dashboard() {
    return(
        <div className="flex min-h-screen bg-[#020617]">
            <Sidebar />
            
            <div className="flex-1 p-6">
               <Header />
            </div>
        </div>
    )
}

export default Dashboard