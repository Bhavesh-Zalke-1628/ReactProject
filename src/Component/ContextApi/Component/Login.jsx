import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'
function Login() {

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, passWord })
    }
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    console.log(userName)
    const { setUser } = useContext(UserContext)

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='userName'
            />
            <input type='password'
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
                placeholder='passWord' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
