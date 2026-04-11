import { Eye, Trash2, ExternalLink } from "lucide-react"

function ProductCard({ image, name, price, oldPrice, change, store }) {
  const isDown = Number(change) < 0

  return (
    <div className="bg-[#091224] border border-[#1a2740] rounded-2xl overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />

        <span className="absolute top-3 left-3 bg-[#2a3347] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {store}
        </span>

        <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[hsl(160,84%,39%)]" />
      </div>

      <div className="p-5">
        <h3 className="text-white font-semibold text-2xl leading-tight">{name}</h3>

        <p className="text-white text-4xl font-bold mt-4">R$ {price}</p>

        <div className="flex items-center justify-between mt-2">
          <p className="text-slate-500 line-through text-sm">{oldPrice}</p>

          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${isDown
              ? "bg-[hsla(160,84%,39%,0.12)] text-[hsl(160,84%,39%)]"
              : "bg-[hsla(0,84%,60%,0.12)] text-red-400"
              }`}
          >
            {isDown ? "↘" : "↗"} {Math.abs(change)}%
          </span>
        </div>

        <div className="flex items-center gap-3 mt-5">
          <button className="flex-1 h-11 rounded-2xl bg-[#101b31] hover:bg-[#16233d] transition text-slate-200 font-medium flex items-center justify-center gap-2">
            <Eye size={16} />
            Detalhes
          </button>

          <button className="w-11 h-11 rounded-2xl bg-[#101b31] hover:bg-[#16233d] transition flex items-center justify-center text-slate-400">
            <Trash2 size={16} />
          </button>

          <button className="w-11 h-11 rounded-2xl bg-[#101b31] hover:bg-[#16233d] transition flex items-center justify-center text-slate-400">
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard