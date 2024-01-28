import { useEffect, useState } from "react";

export const AreaCuadrado = () => {
    
    let lado:number=1;
    const[area, setArea]= useState(0);
    useEffect(()=>{
        setArea(lado*lado);
    },[]);

    
  return (
    <div>
        <h3 className="text-center">Area Cuadrado</h3>
        <div>
            <p className="text-center">El lado del cuadrado es: {lado}</p>
            <p className="text-center">El área es: {area}</p>
        </div>
    </div>
  )
}
