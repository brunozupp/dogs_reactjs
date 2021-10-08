import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import Feed from '../Feed/Feed'
import Head from '../Head/Head'
import NotFound from '../NotFound/NotFound'
import UserHeader from './UserHeader/UserHeader'
import UserPhotoPost from './UserPhotoPost/UserPhotoPost'
import UserStatistics from './UserStatistics/UserStatistics'

const User = () => {

    const {data} = React.useContext(UserContext); 

    return (
        <section className="container">
            <Head title="Minha conta" />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="post" element={<UserPhotoPost />} />
                <Route path="statistics" element={<UserStatistics />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </section>
    )
}

export default User
