import React from 'react'
import styles from './Feed.module.css'
import FeedModal from './FeedModal/FeedModal'
import FeedPhotos from './FeedPhotos/FeedPhotos'
import PropTypes from 'prop-types';

const Feed = ({user}) => {

    const [modalPhoto, setModalPhoto] = React.useState(null);

    const [pages, setPages] = React.useState([1]);

    const [infinite, setInfinite] = React.useState(true);

    React.useEffect(() => {

        let wait = false;

        function infiniteScroll() {

            if(!infinite) return;

            const scroll = window.scrollY; // Seria onde aquele indicador do scroll está
            const height = document.body.offsetHeight - window.innerHeight; // Tamanho da página

            if(scroll > height * 0.75 && !wait) {
                setPages((pages) => [...pages, pages.length + 1]);

                wait = true;

                setTimeout(() => {
                    wait = false;
                }, 500)
            }
        }

        window.addEventListener('wheel', infiniteScroll);
        window.addEventListener('scroll', infiniteScroll);

        return () => {
            window.removeEventListener('wheel', infiniteScroll);
            window.removeEventListener('scroll', infiniteScroll);
        }
    }, [infinite]);

    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
            {
                pages.map((page) => (
                    <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />
                ))
            }
            
        </div>
    )
}

Feed.defaultProps = {
    user: 0,
}

Feed.protoTypes = {
    user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
}

export default Feed
