import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogOut, User, Mail, Calendar, ShieldCheck } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  
  // Dados do localStorage
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Usuário", email: "email@exemplo.com" };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto text-slate-200">
      {/* Botão Voltar */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-6"
      >
        <ArrowLeft size={16} /> Voltar
      </button>

      {/* Header do Perfil / Card Principal */}
      <div className="relative overflow-hidden bg-[#121824] border border-slate-800 rounded-2xl p-6 md:p-8 mb-6">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          {/* Avatar com Iniciais */}
          <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-3xl font-bold text-emerald-400 shadow-lg shadow-emerald-500/10">
            {user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-white">{user.name}</h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-2 text-sm text-slate-400">
              <span className="flex items-center gap-1.5"><Mail size={14} /> {user.email}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> Membro desde maio 2026</span>
            </div>
          </div>
        </div>
        
        {/* Efeito de brilho no fundo */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Grid de Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Produtos monitorados", value: "3" },
          { label: "Rastreamento ativo", value: "0" },
          { label: "Quedas detectadas", value: "0" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#121824] border border-slate-800 p-4 rounded-xl text-center">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Seção de Informações da Conta */}
      <div className="bg-[#121824] border border-slate-800 rounded-2xl overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-800/20 flex items-center gap-2">
          <ShieldCheck size={18} className="text-emerald-400" />
          <h3 className="font-medium text-sm">Informações da conta</h3>
        </div>
        
        <div className="p-6 space-y-5">
          <div>
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Nome Completo</label>
            <div className="mt-1.5 w-full bg-[#0d1117] border border-slate-800 px-4 py-3 rounded-xl text-slate-400 text-sm">
              {user.name}
            </div>
          </div>
          
          <div>
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">E-mail</label>
            <div className="mt-1.5 w-full bg-[#0d1117] border border-slate-800 px-4 py-3 rounded-xl text-slate-400 text-sm">
              {user.email}
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Sessão / Logout */}
      <div className="bg-[#121824] border border-slate-800 rounded-2xl p-6">
        <h3 className="text-sm font-medium mb-4">Sessão</h3>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-500/5 hover:bg-red-500/10 text-red-500 border border-red-500/20 py-3 rounded-xl transition-all text-sm font-semibold"
        >
          <LogOut size={16} /> Sair da conta
        </button>
      </div>
    </div>
  );
};

export default Profile;