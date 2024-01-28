//rafc -> generar codigo base del componente

export const Funciones = () => {
    //FUNCION CON EL TIPO DE DATOS DE ROTORNO
    const sumar=(num1: number, num2: number):number=>{
       return num1+num2; 
    }


  return (
    <div>
        <h3>FUNCIONES</h3>
        <span>El resulatdo es: {sumar(5,2)}</span>
    </div>
  )
}
