import { useEffect, useState } from "react"

export const ArregloDiv5 = () => {
    
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const [resultado, setResultado] = useState<number[]>([]);

  useEffect(() => {
    const nuevoArreglo = arreglo.map((valor) => valor / 5);
    setResultado(nuevoArreglo);
  }, []);


      
  return (
    <div>
        <h3 className="text-center">División del Arreglo</h3>
        <p className="text-center">El arreglo es: {arreglo}</p>
        <p className="text-center">Arreglo dividio para 5: {resultado}</p>
    </div>
  )
}
