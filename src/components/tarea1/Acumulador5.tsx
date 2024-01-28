import { useState } from "react";

export const Acumulador5 = () => {
    const [valor, setVAlor] = useState(0);

    const contador =(num:number) =>{
        setVAlor(valor+num);
    }
  return (
    <div className="text-center">
        <h3>ACUMULADOR: <small>{valor}</small> </h3>
        <button className="btn btn-primary"
        onClick={()=>contador(5)}>+5</button>
        &nbsp;
        <button className="btn btn-primary"
        onClick={()=>contador(-5)}>-5</button>
    </div>
  )
}
