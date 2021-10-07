import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../../Contexts/UserContext'

const ProtectedRoute = (props) => {

    const {isLogged} = React.useContext(UserContext);

    if(isLogged === true) {
        return <Route {...props} />
    } else if(isLogged === false) {
        return <Navigate to="/login" />
    }

    return null
}

export default ProtectedRoute
