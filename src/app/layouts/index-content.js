import React from 'react';
import {Redirect} from 'react-router';

import Routes from '~/app/app-routes';

class Index extends React.Component {
    render() {
        const redirect = (window.location.hash) ? <Redirect to={window.location.hash.slice(1)}/> : '';

        return (
            <div className="container">
                {redirect}
                <Routes/>
            </div>
        )
    }
}

export default Index;