import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../../Forms/Input/Input.js'
import Button from '../../Forms/Button/Button.js'
import useForm from '../../../Hooks/useForm.js'
import useFetch from '../../../Hooks/useFetch.js'
import { PHOTO_POST } from '../../../API/api'
import Error from '../../Helper/Error/Error.js'
import { useNavigate } from 'react-router-dom'
import Head from '../../Head/Head'

const UserPhotoPost = () => {

    const nome = useForm();
    const peso = useForm('number');
    const idade = useForm('number');
    const [img, setImg] = React.useState({});

    const {data, error, loading, request} = useFetch();

    const navigate = useNavigate();

    React.useEffect(() => {

        if(data) navigate("/account");

    }, [data, navigate]);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome',nome.value);
        formData.append('peso',peso.value);
        formData.append('idade',idade.value);

        const token = window.localStorage.getItem("token");
        const {url, options} = PHOTO_POST(formData,token);

        await request(url, options);
    }

    function handleImgChange({target}) {
        setImg({
            raw: target.files[0],
            preview: URL.createObjectURL(target.files[0])
        })
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <Head title="Poste sua foto" />
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" id="nome" {...nome} />
                <Input label="Peso" type="text" id="peso" {...peso} />
                <Input label="Idade" type="text" id="idade" {...idade} />
                <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
                {
                    loading ? <Button disabled>Carregando...</Button> : <Button>Enviar</Button>
                }
                <Error error={error} />
            </form>
            <div>
                {img.preview && (
                    <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>
                )}
            </div>
        </section>
    )
}

export default UserPhotoPost
