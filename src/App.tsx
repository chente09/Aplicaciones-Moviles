// import {TiposBasicos} from "./typescript/TiposBasicos";
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
// import { Funciones } from "./typescript/Funciones";
// import { Contador } from "./components/Contador";
// import { ContadorCustomHook } from "./components/ContadorCustomHook";
// import { ComponenteUseEfect } from "./components/ComponenteUseEfect";
// import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
// import { AreaCuadrado } from "./components/tarea1/AreaCuadrado";
// import { SumaArreglo } from "./components/tarea1/SumaArreglo";
// import { ArregloDiv5 } from "./components/tarea1/ArrregloDiv5";
// import { Alumno } from "./components/tarea1/Alumno";
// import { Acumulador5 } from "./components/tarea1/Acumulador5";


//Componente App
const App = ()=>{
  return(
    <div className="mt-2">
      <h1>Introducción Ts - React</h1>
      <hr />
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      {/* <ContadorCustomHook/> */}
      {/* <ComponenteUseEfect/> */}
      {/* <Login/> */}
      <Usuarios/>
      {/* <AreaCuadrado/> */}
      {/* <SumaArreglo/> */}
      {/* <ArregloDiv5/> */}
      {/* <Alumno/> */}
      {/* <Acumulador5/> */}
    </div>
  )
}
//Exportando el componente a todo el proyecto
export default App;