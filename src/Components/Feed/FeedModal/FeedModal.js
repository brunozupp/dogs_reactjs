import React from 'react'
import { PHOTO_GET } from '../../../API/api';
import useFetch from '../../../Hooks/useFetch'
import Error from '../../Helper/Error/Error';
import Loading from '../../Loading/Loading';
import PhotoContent from '../../Photo/PhotoContent/PhotoContent';
import styles from './FeedModal.module.css'

const FeedModal = ({photo, setModalPhoto}) => {

    const {data, error, loading, request} = useFetch();

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(photo.id);

        request(url, options);

    }, [photo, request]);

    function handleOutsideClick(event) {

        // Relativo ao clique na página
        const {target, currentTarget} = event;

        if(target === currentTarget) {
            setModalPhoto(null);
        }

    }
    
    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    );
}

export default FeedModal
