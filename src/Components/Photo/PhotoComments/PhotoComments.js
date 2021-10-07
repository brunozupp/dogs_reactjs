import React from 'react'
import {UserContext} from '../../../Contexts/UserContext.js'
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {

    const [comments, setComments] = React.useState(() => props.comments);
    const {isLogged} = React.useContext(UserContext);

    const commentsSection = React.useRef(null);

    React.useEffect(() => {

        // Para abrir a listagem de comentários nas últimas msg, dá o scroll automático pra lá
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight

    }, [comments]);

    return (
        <>
            <ul ref={commentsSection} className={styles.comments}>
                {comments.map(comment => (
                    <li key={comment.comment_ID}>
                        <b>{comment.comment_author}: </b>
                        <span>{comment.comment_content}</span>
                    </li>
                ))}
            </ul>
            {
                isLogged && <PhotoCommentsForm id={props.id} setComments={setComments} />
            }
        </>
    )
}

export default PhotoComments
