import React from 'react'
import { COMMENT_POST } from '../../../API/api';
import {ReactComponent as Send} from '../../../Assets/enviar.svg'
import useFetch from '../../../Hooks/useFetch';
import Error from '../../Helper/Error/Error';

const PhotoCommentsForm = ({id, setComments}) => {
    
    const [comment, setComment] = React.useState('');
    const {request, error} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment });
        const {resposne, json} = await request(url, options);

        if(resposne.ok) {
            setComments((comments) => [...comments, json]);
            setComment("");
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment} 
                onChange={({target}) => setComment(target.value)} />
            <button><Send /></button>
            <Error error={error} />
        </form>
    )
}

export default PhotoCommentsForm
