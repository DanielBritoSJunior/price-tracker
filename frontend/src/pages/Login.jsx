import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await loginUser(email, password);
            
            // Pega o token gigante e os dados do usuário que o backend devolveu
            const { token, user } = response.data;

            // Salva no navegador para não perder o login ao dar F5
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            // Manda o usuário direto para o Dashboard!
            navigate("/");
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "E-mail ou senha incorretos.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center relative overflow-hidden font-sans">
            
            {/* ================= BACKGROUND COM ÍCONES FLUTUANTES ================= */}
            {/* Aqui criamos círculos com blur e os seus ícones verdes espalhados */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Efeito de luz sutil bem atrás do card central */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>

                {/* Ícone Flutuante 1 (Esquerda Superior) */}
                <div className="absolute top-[15%] left-[10%] bg-slate-900/40 border border-slate-800 p-3 rounded-2xl rotate-12 animate-bounce [animation-duration:6s]">
                    <span className="text-2xl text-emerald-500/60">🛒</span>
                </div>

                {/* Ícone Flutuante 2 (Direita Superior) */}
                <div className="absolute top-[20%] right-[12%] bg-slate-900/40 border border-slate-800 p-3 rounded-2xl -rotate-12 animate-pulse [animation-duration:4s]">
                    <span className="text-2xl text-emerald-500/60">📦</span>
                </div>

                {/* Ícone Flutuante 3 (Esquerda Inferior) */}
                <div className="absolute bottom-[20%] left-[15%] bg-slate-900/40 border border-slate-800 p-3 rounded-2xl -rotate-6 animate-pulse [animation-duration:5s]">
                    <span className="text-2xl text-emerald-500/60">📈</span>
                </div>

                {/* Ícone Flutuante 4 (Direita Inferior) */}
                <div className="absolute bottom-[15%] right-[10%] bg-slate-900/40 border border-slate-800 p-3 rounded-2xl rotate-45 animate-bounce [animation-duration:7s]">
                    <span className="text-2xl text-emerald-500/60">🏷️</span>
                </div>
            </div>

            {/* ================= CARD DE LOGIN CENTRAL ================= */}
            <div className="w-full max-w-md bg-[#090d16]/80 border border-slate-900 backdrop-blur-xl rounded-3xl p-8 z-10 shadow-2xl mx-4">
                
                {/* Logo e Título */}
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-2xl mb-4">
                        <span className="text-3xl text-emerald-500">📈</span>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">PriceTracker</h1>
                    <p className="text-gray-400 text-sm mt-1">Monitore seus preços</p>
                </div>

                {/* Mensagem de Erro (Se houver) */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-xl mb-4 text-center">
                        {error}
                    </div>
                )}

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                            E-mail
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="w-full bg-[#121824] border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 outline-none focus:border-emerald-500/50 transition text-sm"
                            required
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400">
                                Senha
                            </label>
                            <a href="#" className="text-xs text-gray-500 hover:text-emerald-400 transition">
                                Esqueceu a senha?
                            </a>
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-[#121824] border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 outline-none focus:border-emerald-500/50 transition text-sm"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-700 disabled:opacity-50 text-white font-medium py-3 rounded-xl transition mt-2 shadow-lg shadow-emerald-900/20"
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </button>

                    <div className="relative flex py-2 items-center text-xs text-gray-600 my-1">
                        <div className="flex-grow border-t border-slate-900"></div>
                        <span className="flex-shrink mx-4 uppercase tracking-widest text-[10px]">ou continue com</span>
                        <div className="flex-grow border-t border-slate-900"></div>
                    </div>

                    {/* Botão Google fictício para bater com o design */}
                    <button
                        type="button"
                        className="w-full bg-[#121824] hover:bg-[#171f2e] border border-slate-800 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-3 text-sm"
                    >
                        <span className="text-base">🌐</span> Entrar com Google
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Não tem conta?{" "}
                    <a href="#" className="text-emerald-400 hover:underline font-medium">
                        Criar conta
                    </a>
                </p>

            </div>
        </div>
    );
}

export default Login;