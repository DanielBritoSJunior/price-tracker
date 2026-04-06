import { useNavigate } from "react-router-dom";

function AddProduct() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#020617] text-white p-6 flex justify-center">
            <div className="w-full max-w-4xl">
                <button
                    onClick={() => navigate("/")}
                    className="text-gray-400 mb-6 hover:text-white transition"
                >
                    ← Voltar
                </button>

                <h1 className="text-4xl font-bold">Adicionar Produto</h1>
                <p className="text-gray-400 mt-2 mb-8">
                    Cole a URL do produto para começar a monitorar o preço
                </p>

                <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 max-w-4xl">
                    <form className="flex flex-col gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                URL do Produto *
                            </label>
                            <input
                                type="text"
                                placeholder="https://www.example.com/produto"
                                className="w-full bg-[#172036] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Nome do Produto *
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: iPhone 15 Pro Max"
                                className="w-full bg-[#172036] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Preço Atual (R$) *
                                </label>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full bg-[#172036] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Loja
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ex: Amazon, Mercado Livre"
                                    className="w-full bg-[#172036] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Categoria
                            </label>
                            <select className="w-full bg-[#172036] border border-slate-700 rounded-xl px-4 py-3 text-white outline-none">
                                <option>Outros</option>
                                <option>Eletrônicos</option>
                                <option>Games</option>
                                <option>Informática</option>
                                <option>Celulares</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                URL da Imagem
                            </label>
                            <input
                                type="text"
                                placeholder="https://..."
                                className="w-full bg-[#172036] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <button
                                type="button"
                                className="bg-[#172036] hover:bg-[#1d2942] transition rounded-xl py-3 font-medium"
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-500 transition rounded-xl py-3 font-medium text-white"
                            >
                                Adicionar Produto
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;