import Cliente from "../core/Cliente";
import { IconEdit, IconTrash } from "./Icons";

interface TabelaProps {
  clientes: Cliente[];
}

export default function Tabela(props: TabelaProps) {
  function renderizarConteudo() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="text-center p-4">Ações</th>
      </tr>
    );
  }
  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={i % 2 === 0 ? "bg-pink-200" : "bg-pink-300"}
        >
          <td className="tex-left p-4">{cliente.id}</td>
          <td className="tex-left p-4">{cliente.nome}</td>
          <td className="tex-left p-4">{cliente.idade}</td>
          {rederizarAcoes(cliente)}
        </tr>
      );
    });
  }
  function rederizarAcoes(cliente: Cliente) {
    return (
      <td className="flex">
        <button className="flex justify-center items-center text-green-600 rounded-full p-2 hover:bg-pink-100 m-1 ">{IconEdit}</button>
        <button className="flex justify-center items-center text-red-500 rounded-full p-2 hover:bg-red-100 m-1 ">{IconTrash}</button>
      </td>
    );
  }
  return (
    <table className="w-full rounded-md overflow-hidden">
      <thead className="bg-gradient-to-r from-purple-500 to-pink-600 text-gray-100  ">
        {renderizarConteudo()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
