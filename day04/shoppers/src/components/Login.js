import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { axiosClient } from '../config/axios';
import { useUserToken } from '../hooks/custom-hooks';

const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const token = useUserToken();
    useEffect(() => {
        if (token) {
            history.push('/');
        }
    }, [token])
    const login = (e) => {
        e.preventDefault();
        setErrorMessage('')
        axiosClient.get('/user', {
            params: {
                username,
                password
            }
        })
        .then(res => res.data)
        .then(data => {
            if(data.length > 0) {
                localStorage.setItem('userToken', data[0].token)
                history.push('/');
            } else {
                setErrorMessage('Invalid username and password')
            }
        })
    }

    return (
        <React.Fragment>
            <h1>Login</h1>
            <div>
                {errorMessage}
                <form onSubmit={login}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </React.Fragment>
    )
}
export default Login
