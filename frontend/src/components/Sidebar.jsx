import { useLocation, useNavigate } from "react-router-dom"
import { LayoutGrid, Package, Plus, Settings, TrendingUp } from "lucide-react"

function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    const menuItems = [
        { label: "Dashboard", path: "/", icon: LayoutGrid },
        { label: "Meus Produtos", path: "/meus-produtos", icon: Package },
        { label: "Adicionar Produto", path: "/add-product", icon: Plus },
        { label: "Configurações", path: "/configuracoes", icon: Settings },
    ]

    return (
        <aside className="w-64 min-h-screen bg-[#091224] border-r border-[#1a2740] flex flex-col justify-between">
            <div>
                <div className="p-6 border-b border-[#1a2740]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[hsla(160,84%,39%,0.15)] flex items-center justify-center">
                            <TrendingUp size={18} className="text-[hsl(160,84%,39%)]" />
                        </div>

                        <div>
                            <h1 className="text-xl font-bold leading-none">PriceTracker</h1>
                            <p className="text-sm text-slate-400 mt-1">Monitore seus preços</p>
                        </div>
                    </div>
                </div>

                <nav className="p-4 flex flex-col gap-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon
                        const isActive = location.pathname === item.path

                        return (
                            <button
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${isActive
                                        ? "bg-[hsla(160,84%,39%,0.12)] text-[hsl(160,84%,39%)]"
                                        : "text-slate-400 hover:bg-[#101b31] hover:text-white"
                                    }`}
                            >
                                <Icon
                                    size={18}
                                    className={isActive ? "text-[hsl(160,84%,39%)]" : "text-slate-400"}
                                />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        )
                    })}
                </nav>
            </div>

            <div className="p-6 border-t border-[#1a2740]">
                <p className="text-sm text-slate-500">v1.0 • Price Tracker</p>
            </div>
        </aside>
    )
}

export default Sidebar