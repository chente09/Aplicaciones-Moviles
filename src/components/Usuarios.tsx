import { useEffect } from "react"
import { reqResApi } from "../api/reqRest"
import { error } from "console"

export const Usuarios = () => {
    useEffect(()=>{
        // llamado a nuestra API - petición get
        reqResApi.get('/users')
        .then(resp=>{
            console.log(resp.data.data)
        })
        .catch(error=> console.log(error))
    },[])
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
        </table>
    </div>
  )
}
