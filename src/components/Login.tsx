import { Fragment, useEffect, useReducer } from "react"
//interface
interface ReducerState {
    valid: boolean;
    token: string | null;
    name: string;
    username: string;
    password: string;
}

const initialState: ReducerState = {
    valid: true,
    token: null, //se autogenera cada que se inicia cesión, son por temas de seguridad **Tiene dos posibles valores string - null
    name: '',
    username: '',
    password: ''
}

type LoginActionPayload = {
    name: string,
    username: string,
    password: string
}

// type - class - interface
//Definiendo el tipo de dato del action y sus acciones
type ReducerAction =
    { type: 'logout' }
    | { type: 'login', payload: LoginActionPayload };

//Método reducer - cambio de estado
const authreducer = (state: ReducerState, action: ReducerAction): ReducerState => {
    switch (action.type) {
        case 'logout':
            return {
                valid: false,
                token: null,
                name: '',
                username: '',
                password: ''
            }
        case 'login':
            //desestrucuturacion de objeto
            const { name, username, password } = action.payload;
            return {
                valid: false,
                token: '123KHVHVJHVJKHKJVBNBLKJBLKJ52',
                name: name,
                username: username,
                password: password
            }

        default:
            return state;
    }

}

export const Login = () => {
    /*Hook - useReducer --> funciona con tres parametros
    1 funcion que cambia el estado 
    estado inicial*/

    //desestructurar el obejto
    const [{ valid, token, name }, dispatch] = useReducer(authreducer, initialState);

    //Hook - useEffect
    useEffect(() => {
        //código a ejecutar
        setTimeout(() => { //Función de tiempo
            //código a ejecutar
            dispatch({ type: 'logout' });
        }, 1500);
    }, [])

    //Simular la validación de la consulta
    if (valid) {
        return (
            <Fragment>
                <h3>LOGIN</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </Fragment>
        )

    }

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                name: 'Vicente',
                username: 'chente09',
                password: '123456**'
            }
        })
    }
    const logout = () => {
        dispatch({
            type: 'logout'       
        });
    }

    return (
        <div>
            <h3>LOGIN</h3>
            {
                (token == null)
                    ? <div className="alert alert-danger">No autenticado...</div>
                    : <div className="alert alert-success">Autenticado por {name}</div>
            }
            {
                (token == null)
                    ? <button className="btn btn-primary"
                        onClick={login}>Login</button>
                    : <button className="btn btn-danger"
                        onClick={logout}>Logout</button>
            }

        </div>
    )
}
