import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context/authContext";

export default function NavBar() {

    const navegar = useNavigate();

    const onLogout = ()=>{
        navegar('/login',{replace: true})
    }

    const {user}=useContext(AuthContext);

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Home
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            // className="nav-item nav-link" 
                            className={({isActive})=>{
                                return `nav-item nav-link ${isActive ? 'active':''}`;
                            }}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            // className="nav-item nav-link" 
                            className={({isActive})=>{
                                return `nav-item nav-link ${isActive ? 'active':''}`;
                            }}
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink 
                            // className="nav-item nav-link" 
                            className={({isActive})=>{
                                return `nav-item nav-link ${isActive ? 'active':''}`;
                            }}
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-primary">
                           {user?.name}
                        </span>

                        <button className="nav-item nav-link btn" onClick={onLogout}>
                            Logout
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    )
}
