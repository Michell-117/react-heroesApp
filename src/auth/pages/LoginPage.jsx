import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

export default function LoginPage() {

    const navigate = useNavigate();

    const {logged,loginUser} = useContext(AuthContext);

    console.log(logged);
    console.log(loginUser);

    const onLogin = ()=>{

        loginUser('Fanita bebe')
        navigate('/',{replace: true})
    }
    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />

            <button className='btn btn-primary' onClick={onLogin}>Login</button>

        </div>
    )
}
