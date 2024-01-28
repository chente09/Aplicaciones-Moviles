import { useCounter } from "../hooks/useCounter"

export const ContadorCustomHook = () => {
  //desestructurar el objeto
  const {valor, contador} = useCounter(20);

  return (
    <div>
        <h3>CONTADOR CON HOOK: <small>{valor}</small> </h3>
        <button className="btn btn-primary"
        onClick={()=>contador(1)}>+1</button>
        &nbsp;
        <button className="btn btn-primary"
        onClick={()=>contador(-1)}>-1</button>
    </div>
  )
}
