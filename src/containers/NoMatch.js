import React from 'react';

const NoMatch = ({location}) => {
    return (
        <div>
            <h1>Page Not Found <code>{location.pathname}</code></h1>
        </div>
    );
};

export default NoMatch;