function StatCard({ title, value, subtitle, icon, iconBg }) {
    return (
        <div className="bg-[#091224] border border-[#1a2740] rounded-2xl p-6 flex items-start justify-between">
            <div>
                <p className="text-xs tracking-[0.18em] uppercase text-slate-400">{title}</p>
                <h2 className="text-4xl font-bold text-white mt-3">{value}</h2>
                <p className="text-sm text-slate-400 mt-2">{subtitle}</p>
            </div>

            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${iconBg}`}>
                {icon}
            </div>
        </div>
    )
}

export default StatCard;