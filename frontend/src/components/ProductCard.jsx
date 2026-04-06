function ProductCard({ image, name, price, change }) {
  const isDown = change < 0;

  return (
    <div className="bg-[#0f172a] rounded-xl overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-white font-semibold text-lg">{name}</h3>
        <p className="text-white text-2xl font-bold mt-2">R$ {price}</p>

        <div className="flex items-center justify-between mt-4">
          <span
            className={`text-sm font-bold ${
              isDown ? "text-green-400" : "text-red-400"
            }`}
          >
            {isDown ? "↓" : "↑"} {Math.abs(change)}%
          </span>

          <button className="bg-[#1e293b] px-3 py-2 rounded-lg hover:bg-[#334155]">
            Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;