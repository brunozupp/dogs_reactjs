import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router';

const UserHeader = () => {

    const [title, setTitle] = React.useState('');

    const location = useLocation();

    console.log(location);

    React.useEffect(() => {

        switch(location.pathname) {
            case "/account":
                setTitle("Minhas Fotos");
                break;
            case "/account/statistics":
                setTitle("Estatísticas");
                break;
            case "/account/post":
                setTitle("Postar Foto");
                break;
            default:
                setTitle("Sem Título");
        }

    }, [location]);

    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    )
}

export default UserHeader
