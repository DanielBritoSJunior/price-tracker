import { Bell, Search } from "lucide-react"

function Header() {
    return (
        <header className="h-20 px-8 border-b border-[#1a2740] bg-[#091224] flex items-center justify-between">
            <div className="relative w-full max-w-xs">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="w-full bg-[#101b31] border border-[#1a2740] rounded-2xl h-11 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none"
                />
            </div>

            <div className="flex items-center gap-5">
                <div className="relative">
                    <Bell size={18} className="text-slate-300" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[hsl(160,84%,39%)]" />
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[hsla(160,84%,39%,0.15)] border border-[hsla(160,84%,39%,0.25)] flex items-center justify-center text-[hsl(160,84%,39%)] font-semibold text-sm">
                        DB
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header