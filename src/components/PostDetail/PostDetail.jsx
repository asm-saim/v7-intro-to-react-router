import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetail = () => {
    const detail = useLoaderData();

    // if need , we can use hook  useParams
    const { postid } = useParams()
    console.log("params-Data", postid)

    const navigate = useNavigate()
    return (
        <div>
            <h3>Post Detail</h3>
            <p>{detail.body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetail; 