import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Garanta que o caminho até o seu authService está certinho (ex: se está voltando uma ou duas pastas)
import { registerUser } from "../services/authService";

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            // Dispara o cadastro para a API local (ou de produção)
            await registerUser(name, email, password);
            
            setSuccess("Conta criada com sucesso! Redirecionando para o login...");
            
            // Aguarda 2 segundos para o usuário ver a mensagem de sucesso e redireciona
            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Erro ao criar conta. Tente novamente.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center relative overflow-hidden font-sans">
            
            {/* ================= BACKGROUND COM ÍCONES FLUTUANTES ================= */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Efeito de luz sutil atrás do card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>

                {/* Ícone 1 (Esquerda Superior) */}
                <div className="absolute top-[12%] left-[8%] bg-slate-900/40 border border-slate-800 p-3 rounded-2xl rotate-12 animate-bounce [animation-duration:6s]">
                    <span className="text-2xl text-emerald-500/60">🛒</span>
                </div>

                {/* Ícone 2 (Direita Superior) */}
                <div className="absolute top-[18%] right-[10%] bg-slate-900/40 border border-slate-800 p-3 rounded-2xl -rotate-12 animate-pulse [animation-duration:4s]">
                    <span className="text-2xl text-emerald-500/60">📦</span>
                </div>

                {/* Ícone 3 (Esquerda Inferior) */}
                <div className="absolute bottom-[18%] left-[12%] bg-slate-900/40 border border-slate-800 p-3 rounded-2xl -rotate-6 animate-pulse [animation-duration:5s]">
                    <span className="text-2xl text-emerald-500/60">📈</span>
                </div>

                {/* Ícone 4 (Direita Inferior) */}
                <div className="absolute bottom-[12%] right-[8%] bg-slate-900/40 border border-slate-800 p-3 rounded-2xl rotate-45 animate-bounce [animation-duration:7s]">
                    <span className="text-2xl text-emerald-500/60">🏷️</span>
                </div>
            </div>

            {/* ================= CARD DE CADASTRO CENTRAL ================= */}
            <div className="w-full max-w-md bg-[#090d16]/80 border border-slate-900 backdrop-blur-xl rounded-3xl p-8 z-10 shadow-2xl mx-4">
                
                {/* Cabeçalho */}
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-2xl mb-3">
                        <span className="text-3xl text-emerald-500">📈</span>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Criar Conta</h1>
                    <p className="text-gray-400 text-sm mt-1">Comece a trackear seus produtos</p>
                </div>

                {/* Mensagem de Erro */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-xl mb-4 text-center">
                        {error}
                    </div>
                )}

                {/* Mensagem de Sucesso */}
                {success && (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm p-3 rounded-xl mb-4 text-center">
                        {success}
                    </div>
                )}

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1.5">
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Seu nome"
                            className="w-full bg-[#121824] border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 outline-none focus:border-emerald-500/50 transition text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1.5">
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
                        <label className="block text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1.5">
                            Senha
                        </label>
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
                        className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-700 disabled:opacity-50 text-white font-medium py-3 rounded-xl transition mt-2 shadow-lg shadow-emerald-900/20 text-sm"
                    >
                        {loading ? "Cadastrando..." : "Cadastrar Conta"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Já tem uma conta?{" "}
                    <Link to="/login" className="text-emerald-400 hover:underline font-medium">
                        Fazer login
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Register;