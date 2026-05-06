import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Busca o token que salvamos no navegador
    const token = localStorage.getItem("token");

    // 2. Se o token NÃO existir, chuta o usuário direto para a tela de login
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-[#020617] text-white">
      {/* Barra Lateral Fixa na Esquerda */}
      <Sidebar />

      {/* Área Direita: Cabeçalho + Conteúdo Dinâmico */}
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Painel Central com Scroll independente se o conteúdo crescer */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* O Outlet é onde as páginas (Dashboard, AddProduct) vão aparecer */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;