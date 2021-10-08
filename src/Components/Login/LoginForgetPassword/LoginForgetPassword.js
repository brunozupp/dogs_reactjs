import React from 'react'
import { PASSWORD_LOST } from '../../../API/api'
import useFetch from '../../../Hooks/useFetch'
import useForm from '../../../Hooks/useForm'
import Button from '../../Forms/Button/Button'
import Input from '../../Forms/Input/Input'
import Error from '../../Helper/Error/Error'

const LoginForgetPassword = () => {

    const login = useForm();
    const {data, loading, error, request} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();

        if(!login.validate()) return;

        const {url, options} = PASSWORD_LOST({
            login: login.value, 
            url: window.location.href.replace("forget-password","reset-password")
        })
        await request(url,options);
    }

    return (
        <section>
            <h1 className="title">Perdeu a senha?</h1>
            {
                data
                    ? <p style={{color:"#4c1"}}>{data}</p>
                    : <form onSubmit={handleSubmit}>
                        <Input label="Email / Usuário" type="text" id="login" {...login} />
                        {
                            loading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>
                        }
                    </form>
            }
            
            <Error error={error} />
        </section>
    )
}

export default LoginForgetPassword
