import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const loadData = useLoaderData()
    console.log(loadData)
    return (
        <div>
            <h1>I am from Users </h1>
            {
                loadData.map(data => <User key={data.id} data={data}></User>)
            }
        </div>
    );
};

export default Users;