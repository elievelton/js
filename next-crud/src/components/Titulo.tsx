interface TiProps {
  children: string;
}
export default function Titulo(props: TiProps) {
  return (
    <div className=" flex flex-col justify-center">
      <h1 className="px-5 py-2 text-xl">{props.children}</h1>
      <hr className="border-1 border-purple-500 to-border-pink-600" />
    </div>
  );
}
