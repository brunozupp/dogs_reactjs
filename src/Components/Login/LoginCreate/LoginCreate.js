import React from 'react'
import styles from './LoginCreate.module.css';
import Input from '../../Forms/Input/Input.js';
import Button from '../../Forms/Button/Button.js';
import useForm from '../../../Hooks/useForm.js';
import { USER_POST } from '../../../API/api';
import {UserContext} from '../../../Contexts/UserContext.js'

const LoginCreate = () => {

    const username = useForm();
    const email = useForm("email");
    const password = useForm();

    const {userLogin} = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        const {url, options} = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value
        })

        const response = await fetch(url, options);

        if(response.ok) userLogin(username.value, password.value);
    }

    return (
        <section className={"animeLeft"}>
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" id="username" {...username} />
                <Input label="Email" type="email" id="email" {...email} />
                <Input label="Senha" type="password" id="password" {...password} />
                <Button>Cadastrar</Button>
            </form>
        </section>
    )
}

export default LoginCreate
