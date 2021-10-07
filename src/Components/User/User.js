import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader/UserHeader'
import UserPhotoPet from './UserPhotoPet/UserPhotoPet'
import UserStatistics from './UserStatistics/UserStatistics'

const User = () => {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="post" element={<UserPhotoPet />} />
                <Route path="statistics" element={<UserStatistics />} />
            </Routes>
        </section>
    )
}

export default User
