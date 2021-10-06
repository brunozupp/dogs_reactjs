import React from 'react'
import { Link } from 'react-router-dom'
import { TOKEN_POST, USER_GET } from '../../../API/api';
import { UserContext } from '../../../Contexts/UserContext';
import useForm from '../../../Hooks/useForm';
import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';
import Error from '../../Helper/Error/Error';
import styles from './LoginForm.module.css';
import stylesButton from '../../Forms/Button/Button.module.css';

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
        <section className="animeLeft">
            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" id="username" {...username} />
                <Input label="Senha" type="password" id="password" {...password} />
                {
                    loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>
                }
                <Error error={error} />
            </form>
            <Link className={styles.forgetPassword} to="/login/forget-password">Esqueceu a senha?</Link>
            <div className={styles.register}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesButton.button} to="/login/create">Cadastro</Link>
            </div>
        </section>
    )
}

export default LoginForm
