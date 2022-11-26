
import Layout from "../components/Layout"
export default function Home() {
  return (
    <div className={`flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-900 to-pink-600
    text-white
    `} >
      <Layout titulo = "Cadastro Simples">
        <span>
          Conteúdo
        </span>
      </Layout>
    </div>
    )
}
