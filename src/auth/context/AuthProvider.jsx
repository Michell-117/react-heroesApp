import { useReducer } from "react"
import { AuthContext } from "./authContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const auth = {}

// const initialState = {
//     logged: false
// }

const init = ()=>{
    const user = JSON.parse( localStorage.getItem('user') )
    return{
        logged: !!user,
        user:user
    }
}

export default function AuthProvider({children}) {

    const [state, dispatch] = useReducer(authReducer, {/*initialState*/},init)

    const loginUser = (name="")=>{
        const user = { 
            id:'ABC',
            name: name
        }
        const action = {
            type: types.login,
            payload:user
        }

        localStorage.setItem('user',JSON.stringify(user))
        dispatch(action)
    }

    const logoutUser = ()=>{
        const action = {
            type: types.logout
        }
        localStorage.removeItem('user')
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{...state,loginUser,logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}
