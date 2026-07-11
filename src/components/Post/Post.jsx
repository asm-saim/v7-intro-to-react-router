import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {

    const { title, id, body } = post;

    return (
        <div style={{ border: '2px solid green', margin: "10px", padding: "10px" }}>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>
                <button>See Details</button>
            </Link>
        </div>
    );
};

export default Post;