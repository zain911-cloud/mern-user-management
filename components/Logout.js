import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }, []);

    return <h1>Logging out...</h1>;
};

export default Logout;
