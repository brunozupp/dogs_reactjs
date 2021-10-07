import React from 'react'
import styles from './Feed.module.css'
import FeedModal from './FeedModal/FeedModal'
import FeedPhotos from './FeedPhotos/FeedPhotos'

const Feed = () => {
    return (
        <div>
            <FeedModal />
            <FeedPhotos />
        </div>
    )
}

export default Feed
