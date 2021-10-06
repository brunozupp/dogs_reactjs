import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginCreate from './LoginCreate/LoginCreate'
import LoginForgetPassword from './LoginForgetPassword/LoginForgetPassword'
import LoginForm from './LoginForm/LoginForm'
import LoginResetPassword from './LoginResetPassword/LoginResetPassword'

const Login = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="create" element={<LoginCreate />} />
                <Route path="forget-password" element={<LoginForgetPassword />} />
                <Route path="reset-password" element={<LoginResetPassword />} />
            </Routes>
        </div>
    )
}

export default Login
