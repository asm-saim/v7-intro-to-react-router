import React, { Suspense } from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import UserDetail2 from '../UserDetail2/UserDetail2';

const User = ({ data }) => {

    const { id, name, username, email } = data;
    // console.log(data)
    const userDesign = {
        border: '2px solid orange',
        padding: '10px',
        margin: "10px"
    }

    const [showInfo, setShowInfo] = useState(false);

    const dataFetch = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    return (
        <div style={userDesign}>
            <h4>{name}</h4>
            <p>{username}</p>
            <p>{email}</p>
            <Link to={`/user/${id}`}>See Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? "Hide Details" : "Show Detail"}</button>
            {
                showInfo && <Suspense fallback="Loading.....">
                    <UserDetail2 dataFetch={dataFetch}></UserDetail2>
                </Suspense>
            }
        </div>
    );
};

export default User;