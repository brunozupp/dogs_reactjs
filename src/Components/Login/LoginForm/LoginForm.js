import React from 'react'
import { Link } from 'react-router-dom'
import { TOKEN_POST, USER_GET } from '../../../API/api';
import { UserContext } from '../../../Contexts/UserContext';
import useForm from '../../../Hooks/useForm';
import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';

const LoginForm = () => {

    const username = useForm();
    const password = useForm();

    const {userLogin, error, loading} = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if(!(username.validate() && password.validate())) return;

        await userLogin(username.value, password.value);
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" id="username" {...username} />
                <Input label="Senha" type="password" id="password" {...password} />
                {
                    loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>
                }
                {
                    error && <p>{error}</p>
                }
            </form>
            <Link to="/login/create">Cadastro</Link>
        </section>
    )
}

export default LoginForm
