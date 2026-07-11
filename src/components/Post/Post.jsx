import React from 'react';
import { Link, useNavigate } from 'react-router';


const Post = ({ post }) => {

    const { title, id, body } = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }


    return (
        <div style={{ border: '2px solid green', margin: "10px", padding: "10px" }}>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>
                <button>See Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of {id}</button>
        </div>
    );
};

export default Post;