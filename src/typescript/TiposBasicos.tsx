export const TiposBasicos=()=>{
    //LOGICA DE PROGRAMACIÓN
    //***variables***
    // let nombre: string | number ='Viviana';
    // nombre=1234;
    // let nombre: string ='VICENTE';
    // nombre.toLowerCase;
    const nombre: string ='VICENTE';
    const edad: number = 23;
    const donanteOrganos : boolean= false;
    //***arreglos***
    const poderes: string[]=['velocidad','volar','invisible'];
    //añadir dato en el arreglo
    poderes.push('fuerza');

    

    return(
        <div>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {donanteOrganos? 'DONANTE' : 'NO DONANTE'}
            <br />
            {poderes.join(', ')}
        </div>
    )
}

// export default TiposBasicos;