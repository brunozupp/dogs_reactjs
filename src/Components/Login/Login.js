import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import LoginCreate from './LoginCreate/LoginCreate'
import LoginForgetPassword from './LoginForgetPassword/LoginForgetPassword'
import LoginForm from './LoginForm/LoginForm'
import LoginResetPassword from './LoginResetPassword/LoginResetPassword'
import styles from './Login.module.css';
import NotFound from '../NotFound/NotFound'

const Login = () => {

    const {isLogged} = React.useContext(UserContext);

    if(isLogged === true) {
        return <Navigate to="/account" />
    }

    return (
        <section className={styles.login}>
           <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="create" element={<LoginCreate />} />
                    <Route path="forget-password" element={<LoginForgetPassword />} />
                    <Route path="reset-password" element={<LoginResetPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
           </div>
        </section>
    )
}

export default Login
