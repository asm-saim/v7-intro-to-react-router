import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const value = useLoaderData()
    console.log(value)

    return (
        <div>
            <p>see details</p>
        </div>
    );
};

export default UserDetail;