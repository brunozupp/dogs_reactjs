import React from 'react'
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem'
import useFetch from '../../../Hooks/useFetch.js'
import { PHOTOS_GET } from '../../../API/api'
import Error from '../../Helper/Error/Error.js'
import Loading from '../../Loading/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({user, page, setModalPhoto, setInfinite}) => {

    const {data, loading, error, request} = useFetch();

    React.useEffect(() => {

        async function fetchPhotos() {

            const total = 6;

            const {url, options} = PHOTOS_GET({
                page,
                total,
                user /* User igual a 0 significa que não vai puxar de um user específico */
            })
            const {response, json} = await request(url, options);
            
            if(response && response.ok && json.length < total) {
                setInfinite(false);
            }
        } 

        fetchPhotos();

    }, [request, user, page, setInfinite]);

    if(error) {
        return <Error error={error} />
    }

    if(loading) return <Loading />

    if(data) {
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}
            </ul>
        );
    }

    return null;
}

export default FeedPhotos
