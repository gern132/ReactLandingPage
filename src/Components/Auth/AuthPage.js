import React from 'react';
import { NavLink , Route} from "react-router-dom";
import {useHttp} from '../../hooks/http.hook'
import {useMessage} from '../../hooks/message.hook'
import {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../../Context/AuthContext'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
    email: '', password: ''
    })

    useEffect(() => {
    message(error)
    clearError()
    }, [error, message, clearError])

    useEffect(() => {
    window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registrHandler = async () => {
    try {
        const data = await request('/api/auth/register', 'POST', {...form})
        message(data.message)
    } catch (e) {}
}

    const loginHandler = async () => {
    try {
        const data = await request('/api/auth/login', 'POST', {...form})
        auth.login(data.token, data.userId);
    } catch (e) {}
    }
    return (
        <div className="authbg">
            <div className="authbg__main">
                <input type="text"
                        placeholder="Введите Email"
                        id="email"
                        name="email"
                        disabled={loading}
                        onChange={changeHandler} />

                <input type="password"
                        placeholder="Введите пароль"
                        id="password"
                        name="password"
                        disabled={loading}
                        onChange={changeHandler} />

                <div className="authbg__main-button">
                    <NavLink to="/main"><button  onClick={loginHandler} className="sign__in">Sign In</button></NavLink>
                    <button  onClick={registrHandler} className="sign__up">Sign Up</button>
                </div>
            </div>
        </div>
    )
}