import { useReducer } from "react"
import { AuthContext } from "./authContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const auth = {}

const initialState = {
    logged: false
}

export default function AuthProvider({children}) {

    const [state, dispatch] = useReducer(authReducer, initialState)

    const loginUser = (name="")=>{
        const action = {
            type: types.login,
            payload: {
                id:'ABC',
                name: name
            }
        }

        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{...state,loginUser}}>
            {children}
        </AuthContext.Provider>
    )
}
