import React from 'react'
import { useParams } from 'react-router'
import { PHOTO_GET } from '../../API/api';
import useFetch from '../../Hooks/useFetch';
import Head from '../Head/Head';
import Error from '../Helper/Error/Error';
import Loading from '../Loading/Loading';
import PhotoContent from './PhotoContent/PhotoContent';

const Photo = () => {

    const {id} = useParams();

    const {data, loading, error, request} = useFetch();

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(id);
        request(url, options);
    }, [request, id]);

    if(error) return <Error error={error} />

    if(loading) return <Loading />

    if(data)
        return (
            <section className="container mainContainer">
                <Head title={data.photo.title} />
                <PhotoContent data={data} single={true} />
            </section>
        )
    
    return null;
}

export default Photo
