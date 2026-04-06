function Header() {
    return (
        <header className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-gray-400 text-sm">Acompanhe os preços dos seus produtos</p>
            </div>


            <div className="flex items-center gap-4">
                <input type="" 
                placeholder="Buscar produtos..."
                className="bg-[#0f172a] text-white px-4 py-2 rounded-lg outline-none border border-slate-700"
                />

                <div className="w-10 h-10 rouded full bg-green-500 flex items-center justify-center font-bold text-black">
                    D
                </div>
            </div>
        </header>
    )
}

export default Header