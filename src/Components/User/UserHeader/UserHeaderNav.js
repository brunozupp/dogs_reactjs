import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../../Contexts/UserContext'
import {ReactComponent as Feed} from '../../../Assets/feed.svg';
import {ReactComponent as Statistics} from '../../../Assets/estatisticas.svg';
import {ReactComponent as PostPhoto} from '../../../Assets/adicionar.svg';
import {ReactComponent as Leave} from '../../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {

    const [mobile, setMobile] = React.useState(null);
    const {userLogout} = React.useContext(UserContext);

    return (
        <nav className={styles.nav}>
            <NavLink to="/account" end>
                <Feed />
                {mobile && 'Minhas Fotos'}
            </NavLink>
            <NavLink to="/account/statistics">
                <Statistics />
                {mobile && 'Estatísticas'}
            </NavLink>
            <NavLink to="/account/post">
                <PostPhoto />
                {mobile && 'Adicionar Foto'}
            </NavLink>
            <button onClick={userLogout}>
                <Leave />
                {mobile && 'Sair'}
            </button>
        </nav>
    )
}

export default UserHeaderNav
