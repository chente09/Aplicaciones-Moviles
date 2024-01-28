import { useState } from "react";

export const useCounter = (inicial: number=10) => {
    const [valor, setVAlor] = useState(inicial);

    const contador =(num:number) =>{
        setVAlor(valor+num);
    };

    return {
        valor,
        contador
    }
}
