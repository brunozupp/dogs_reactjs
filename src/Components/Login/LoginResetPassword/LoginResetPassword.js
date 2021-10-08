import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../../API/api';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';
import Head from '../../Head/Head';
import Error from '../../Helper/Error/Error';

const LoginResetPassword = () => {

    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');

    const password = useForm();

    const {loading, error, request} = useFetch();

    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const key = params.get("key");
        const login = params.get("login");

        if(login) setLogin(login);
        if(key) setKey(key);
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        if(!password.validate()) return;

        const {url, options} = PASSWORD_RESET({
            login,
            key,
            password: password.value
        });

        const {response} = await request(url, options);

        if(response.ok) {
            navigate("/login");
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Resete a senha" />
            <h1 className="title">Resete a senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova Senha" type="password" name="password" {...password} />
                {
                    loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>
                }
            </form>
            <Error error={error} />
        </section>
    )
}

export default LoginResetPassword
