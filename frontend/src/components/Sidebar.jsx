function Sidebar() {
    return(
        <div className="w-64 h-screen bg-[#0f172a] text-white p-5 flex flex-col">
            <h1 className="text-2xl font-bold mb-10">PriceTracker</h1>

            <nav className="flex flex-col gap-4">
                <button className="text-left px-4 py-2 rounded-lg bg-[#1e293b] hover:bg-[#334155] transition">
                    Dashboard
                </button>

                <button className="text-left px-4 py-2 rounded-lg bg-[#1e293b] hover:bg-[#334155] transition">
                    My Products
                </button>

                <button className="text-left px-4 py-2 rounded-lg bg-[#1e293b] hover:bg-[#334155] transition">
                    Adicionar Produtos
                </button>

                <button className="text-left px-4 py-2 rounded-lg bg-[#1e293b] hover:bg-[#334155] transition">
                    Settings
                </button>
            </nav>
        </div>
    )
}

export default Sidebar