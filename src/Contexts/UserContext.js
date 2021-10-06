import React from 'react'
import { TOKEN_POST, USER_GET } from '../API/api';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {

    const [data, setData] = React.useState(null);
    const [isLogged, setIsLogged] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    async function userLogin(username, password) {
        const {url, options} = TOKEN_POST({username, password});
        const tokenResponse = await fetch(url, options);
        const {token} = await tokenResponse.json();
        window.localStorage.setItem('token', token);
        await getUser(token);
    }

    async function getUser(token) {
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();

        setData(json);
        setIsLogged(true);
    }

    return (
        <UserContext.Provider value={{userLogin, data}}>
            {children}
        </UserContext.Provider>
    )
}
