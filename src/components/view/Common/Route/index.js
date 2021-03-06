import React from 'react'
import { Route } from 'react-router-dom';

import NotAuthorized from 'components/view/NotAuthorized';

const AuthorizedRoute = (props) => {

    const { location, userPermissions, component: Component, ...rest } = props;

    const notAuthProps = {
        from: location
    };

    return (
        <Route {...rest} render={props => (
            userPermissions.admin || userPermissions.seller ? (
                    <Component {...props}/>
                ) : (
                    <NotAuthorized {...notAuthProps} />
                )
        )}/>
    );
}

export default AuthorizedRoute;
