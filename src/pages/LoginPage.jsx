import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import UserService from '../services/UserService'
import axios from 'axios'

const LoginPage = () => {
    const base_url = "http://localhost:8080"
    const navigate = useNavigate()

    const initialLoginState = {
        username: '',
        password: ''
    }

    const [loginData, setLoginData] = useState(initialLoginState)

    const handleChange = (e) => {
        let { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const login = async (loginData) => {
        try {
            const response = await axios.post(base_url + "/login", loginData)
            localStorage.setItem('token', response.data.token)
            
            const loggedInUser =  await UserService.getUserByUsername(loginData.username)
            console.log(loggedInUser)
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
            navigate("/dashboard")
        } catch(error) {
            console.log("login failed with error: " + error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(loginData)
    }

    return ( 
        <section className="section login-section">
            <Card className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        <span className="icon">
                            <FaLock />
                        </span>
                        Login
                    </p>
                </header>
                <div className="card-content">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="field spaced">
                            <label className="label">Username</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="username"
                                    value={loginData.username}
                                    onChange={handleChange}
                                    placeholder="username" />
                            </div>
                            <p className="help">
                                Please enter your username
                            </p>
                        </div>

                        <div className="field spaced">
                            <label className="label">Password</label>
                            <p className="control">
                                <input
                                    className="input"
                                    type="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                    placeholder="Password" />
                            </p>
                            <p className="help">
                                Please enter your password
                            </p>
                        </div>

                        <hr />

                        <div className="field spaced">
                            <div className="control">
                                <button
                                    type="submit"
                                    className="button blue">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        </section>
    )
}

export default LoginPage