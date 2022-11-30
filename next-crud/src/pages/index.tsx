import Layout from "../components/Layout";
import Cliente from "../core/Cliente";
import Tabela from "../components/Tabela";
export default function Home() {

  //Adicionando clinetes manualmente
  const clientes = [new Cliente("Ana", 33, "1"),new Cliente("Pedro", 23, "2"),new Cliente("Elievelton", 37, "3"),new Cliente("Linária", 35, "4")];

  return (
    <div
      className={`flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-900 to-pink-600
    text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  );
}
