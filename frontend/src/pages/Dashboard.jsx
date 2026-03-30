import Sidebar from "../components/Sidebar"

function Dashboard() {
    return(
        <div className="flex">
            <Sidebar />
            
            <div className="flex-1 bg-[#020617] text-white p-6">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
            </div>
        </div>
        
        
    )
}

export default Dashboard