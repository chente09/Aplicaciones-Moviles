import { useEffect, useState } from "react"

export const ComponenteUseEfect = () => {
    const [valor, setValor] = useState(false);
    const cambiarValor=()=>{
        setValor(!valor);
    }
    //hook - useEffect
    //accion  por default - siempre: al menos una vez se ejecuta el código en el hook
    //al momento que se renderiza la pag o pantalla se ejecuta el hook useEffect
    //parámetro uno contiene una funcion con el codigo a ejecutar
    //parámetro dos contiene un arreglo de dependencias
    useEffect(()=>{
        //código a ejecutar
        console.log('Desde useEfect');
    },[valor]);
    //si no se coloca el parámetro 2, el hook se ejecuta cada vez que se renderiza la pag.
    //si el parámetro 2 es un arreglo vacie el hook solo se ejecuta la primera vez que se renderiza la pag.
  return (
    <div>
        <h3>Hook - Use Effect</h3>
        <button onClick={cambiarValor}>CAMBIAR</button>

    </div>
  )
}

