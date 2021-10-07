import React from 'react'
import { useNavigate } from 'react-router';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../API/api';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {

    const [data, setData] = React.useState(null);
    const [isLogged, setIsLogged] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const navigate = useNavigate();

    const userLogout = React.useCallback(async function userLogout() {
        setData(null);
        setError(null);
        setLoading(false);
        setIsLogged(false);
        window.localStorage.removeItem("token");

        navigate("/login");
    }, [navigate]);

    async function userLogin(username, password) {
        
        try {
            setError(null);
            setLoading(true);

            const {url, options} = TOKEN_POST({username, password});
            const tokenResponse = await fetch(url, options);

            if(!tokenResponse.ok) {
                throw new Error(`Erro: Usuário inválido`);
            }
 
            const {token} = await tokenResponse.json();
            window.localStorage.setItem('token', token);
            await getUser(token);

            navigate("/account");
        
        } catch (error) {
            setError(error.message);
            setIsLogged(false);
        } finally {
            setLoading(false);
        }
    }

    async function getUser(token) {
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setIsLogged(true);
    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');

            if(token) {
                try {

                    setError(null);
                    setLoading(true);

                    const {url, options} = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);

                    if(!response.ok) {
                        throw new Error("Token inválido");
                    }

                    await getUser(token);
                    
                } catch (error) {
                    userLogout();
                } finally {
                    setLoading(false);
                }

            } else {
                setIsLogged(false);
            }
        }

        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{userLogin, data, userLogout, loading, isLogged, error}}>
            {children}
        </UserContext.Provider>
    )
}
