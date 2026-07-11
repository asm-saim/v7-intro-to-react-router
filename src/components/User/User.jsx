import React from 'react';
import { Link } from 'react-router';

const User = ({ data }) => {

    const { id, name, username, email } = data;
    // console.log(data)
    const userDesign = {
        border: '2px solid orange',
        padding: '10px',
        margin: "10px"
    }
    return (
        <div style={userDesign}>
            <h4>{name}</h4>
            <p>{username}</p>
            <p>{email}</p>
            <Link to={`/user/${id}`}>See Details</Link>
        </div>
    );
};

export default User;