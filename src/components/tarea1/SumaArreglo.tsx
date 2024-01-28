import { useEffect, useState } from "react"

export const SumaArreglo = () => {
    
      let arreglo=[5,10,15,20,25,30,35,40,45,50];
      const [suma, setSuma]= useState(0);

      useEffect(()=>{
        let total=0;
        for(let i=0; i<arreglo.length; i++){
            total += arreglo[i];
        }
        setSuma(total);
      },[])
  return (
    <div>
        <h3 className="text-center">Suma Arreglo</h3>
        <p className="text-center">El arreglo es: {arreglo}</p>
        <p className="text-center">La suma es: {suma}</p>
    </div>
  )
}
