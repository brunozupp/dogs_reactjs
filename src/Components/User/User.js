import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader/UserHeader'
import UserPhotoPost from './UserPhotoPost/UserPhotoPost'
import UserStatistics from './UserStatistics/UserStatistics'

const User = () => {

    const {data} = React.useContext(UserContext); 

    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="post" element={<UserPhotoPost />} />
                <Route path="statistics" element={<UserStatistics />} />
            </Routes>
        </section>
    )
}

export default User
