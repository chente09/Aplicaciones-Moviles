export const ObjetosLiterales =()=>{
    //INTERFACE
    // type, class, interface
    interface Persona{
        nombreCompleto: string;
        edad: number;
        direccion:Direccion;
    }

    interface Direccion{
        pais: string;
        casaNumero: number;
    }
    //no se instacian las interfaces
    // const personaInterface = new Persona();
    
    //OBJETO
    const persona: Persona={
        nombreCompleto: 'Vicente',
        edad: 23,
        direccion:{
            pais: 'Ecuador',
            casaNumero: 5
        }
    }

    //ACCEDER AL VALOR OBJETO - no es posible si no existe el atributo
    // persona.nombreCompleto;
    return(
        <div>
            <h3>Objetos Literales</h3>
            {/* {persona.nombre} */}
            <code>
                <pre>
                {JSON.stringify(persona,null,2)}
                </pre>
            </code>
        </div>
    )
}