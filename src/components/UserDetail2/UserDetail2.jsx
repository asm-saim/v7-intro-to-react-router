import React, { use } from 'react';
import { data } from 'react-router';

const UserDetail2 = ({ dataFetch }) => {

    const { name, id, email, address } = use(dataFetch);
    return (
        <div>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <p>{address.city}</p>
        </div>
    );
};

export default UserDetail2;