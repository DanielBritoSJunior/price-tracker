function StatCard({ title, value, color}) {
    return (
        <div className="bg-[#0f172a] p-5 rounded-xl lfex flex-col gap-2">
            <span className=" text-gray-400 text-sm">{title}</span>

            <div className="flex items-center justify-between">
                <h2 className=" text-2xl font-bold text-white">{value}</h2>

                <div className={`w-3 h-3 rounded-full ${color}`}></div>
            </div>
        </div>
    )
}

export default StatCard