import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../../Hooks/useForm';
import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';

const LoginForm = () => {

    const username = useForm();
    const password = useForm();

    function handleSubmit(event) {
        event.preventDefault();

        if(!(username.validate() && password.validate())) return

        fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json)
            return json;
        })
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" id="username" {...username} />
                <Input label="Senha" type="password" id="password" {...password} />
                <Button>Entrar</Button>
            </form>
            <Link to="/login/create">Cadastro</Link>
        </section>
    )
}

export default LoginForm
