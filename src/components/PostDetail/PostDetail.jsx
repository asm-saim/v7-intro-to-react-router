import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {

    const detail = useLoaderData();
    return (
        <div>
            <h3>Post Detail</h3>
            <p>{detail.body}</p>
        </div>
    );
};

export default PostDetail; 