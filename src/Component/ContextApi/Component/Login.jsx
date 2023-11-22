import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'
import { unstable_useViewTransitionState } from 'react-router-dom'
function Login() {
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, passWord })
    }

    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    const { setUser } = useContext(useContext)

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='userName'
            />
            <input type="text"
                value={userName}
                onChange={(e) => setPassWord(e.target.value)}
                placeholder='passWord' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
