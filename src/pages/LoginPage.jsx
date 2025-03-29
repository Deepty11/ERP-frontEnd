import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import loginService from '../services/LoginService'
import { useAuth } from '../components/AuthProvider'
import UserService from '../services/UserService'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = () => {

    const navigate = useNavigate();
    const { login, loggedInUsername, authLoggedInUser } = useAuth();

    const initialLoginState = {
        username: '',
        password: ''
    }

    const [loginData, setLoginData] = useState(initialLoginState);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        let { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!loginData.username || !loginData.password) {
            setError('Required!');
            toast.error('Username & Password Required!');
            return;
        } else {
            setError('');
        }

        await signIn();
    }

    const signIn = async () => {
        try {
            const result = await loginService.login(loginData);

            if (result?.success) {
                login(result?.token);

                const loggedInUser = await UserService.getUserByUsername(loggedInUsername());
                authLoggedInUser(loggedInUser);

                navigate("/dashboard")
            } else {
                toast.error(result?.message);
            }
        } catch (e) {
            console.log(e)
            toast.error(e)
            setLoginData(initialLoginState)
        }
    }

    return (
        <div>
            <ToastContainer
                position='top-center'
                hideProgressBar={true}
                 />

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
                                        value={loginData?.username}
                                        onChange={handleChange}
                                        placeholder="username" />
                                </div>
                                <p className="help">
                                    Please enter your username
                                </p>
                                {error && error.includes('Required') && <span className="error">{error}</span>}
                            </div>

                            <div className="field spaced">
                                <label className="label">Password</label>
                                <p className="control">
                                    <input
                                        className="input"
                                        type="password"
                                        name="password"
                                        value={loginData?.password}
                                        onChange={handleChange}
                                        placeholder="Password" />
                                </p>
                                <p className="help">
                                    Please enter your password
                                </p>
                                {error && error.includes('Required') && <span className="error">{error}</span>}
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
        </div>

    )
}

export default LoginPage