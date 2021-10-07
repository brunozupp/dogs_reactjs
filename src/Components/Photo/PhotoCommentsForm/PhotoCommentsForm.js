import React from 'react'
import { COMMENT_POST } from '../../../API/api';
import {ReactComponent as Send} from '../../../Assets/enviar.svg'
import useFetch from '../../../Hooks/useFetch'
import Error from '../../Helper/Error/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments}) => {
    
    const [comment, setComment] = React.useState('');
    const {request, error} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment });
        const {response, json} = await request(url, options);

        if(response.ok) {
            setComments((comments) => [...comments, json]);
            setComment("");
        }
    }
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea 
                className={styles.textarea}
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment} 
                onChange={({target}) => setComment(target.value)} />
            <button className={styles.button}><Send /></button>
            <Error error={error} />
        </form>
    )
}

export default PhotoCommentsForm