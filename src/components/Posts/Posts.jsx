import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const loadData = useLoaderData();
    return (
        <div>
            <h4>POSTS AMOUNT:{loadData.length}</h4>
            {
                loadData.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;