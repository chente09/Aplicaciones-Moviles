import { useState } from "react"

export const Contador = () => {

    //Hook - useState
    //**PRIMER PARAMETRO INDICA EL VALOR INICIAL DEL ESTADO ***
    //**SEGUNDO PARAMETRO CAMBIANDO EL VALOR INICIAL DEL ESTADO --> es una función ***

    const [valor, setVAlor] = useState(0);

    const contador =(num:number) =>{
        setVAlor(valor+num);
    }

  return (
    <div>
        <h3>CONTADOR: <small>{valor}</small> </h3>
        <button className="btn btn-primary"
        onClick={()=>contador(1)}>+1</button>
        &nbsp;
        <button className="btn btn-primary"
        onClick={()=>contador(-1)}>-1</button>
    </div>
  )
}
