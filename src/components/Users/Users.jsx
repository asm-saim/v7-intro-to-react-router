import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const loadData = useLoaderData()
    console.log(loadData)
    return (
        <div>
            <h1>I am from Users </h1>
        </div>
    );
};

export default Users;