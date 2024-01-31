import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRest"
import { error } from "console"
import { ListadoUsuarios, Usuario } from '../interface/interfaceRepRes';

export const Usuarios = () => {
    const [users, setUsers] = useState<Usuario[]>([]);


    useEffect(() => {
        // llamado a nuestra API - petición get
        reqResApi.get<ListadoUsuarios>('/users')
            .then(resp => {
                // console.log(resp.data.data)
                setUsers(resp.data.data)
            })
            .catch(error => console.log(error))
    }, [])

    //Funcion que pinte los datos dentro del body
    const itemUsuario = ({id, first_name, last_name, email, avatar}:Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} alt={first_name} 
                    style={{
                        width:40,
                        borderRadius:10
                    }}/>
                </td>
                <td>{first_name}{last_name}</td>
                <td>{email}</td>
            </tr>
        );
    };

    return (
        <div>
            <h3>Login</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre Completo</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usuario)=>itemUsuario(usuario))
                    }
                </tbody>
            </table>
        </div>
    )
}
