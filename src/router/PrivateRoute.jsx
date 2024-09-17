import { useContext } from "react"
import { AuthContext } from "../auth/context/authContext"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext)
    const {pathname,search} = useLocation()
    // console.log(pathname);
    // console.log(search);

    const lastPage = `${pathname}${search}`
    // console.log(lastPage);
    localStorage.setItem('lastPage', lastPage)

    return (logged) // si es true regresamos el children (el componente que pongaamos dentro de nuestro componente "PrivateRoute")
        ?children // children === "<HeroesRoutes/>"
        : <Navigate to='/login'/> // de no cumplirse el "logged" vavegamos al "/login"
}
