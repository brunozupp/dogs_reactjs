import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../../Contexts/UserContext'
import {ReactComponent as Feed} from '../../../Assets/feed.svg';
import {ReactComponent as Statistics} from '../../../Assets/estatisticas.svg';
import {ReactComponent as PostPhoto} from '../../../Assets/adicionar.svg';
import {ReactComponent as Leave} from '../../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../../Hooks/useMedia';

const UserHeaderNav = () => {

    const {userLogout} = React.useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const {pathname} = useLocation();

    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {
                mobile && (<button 
                    aria-label="Menu" 
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                >
                </button>)
            }
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
        </>
    )
}

export default UserHeaderNav
