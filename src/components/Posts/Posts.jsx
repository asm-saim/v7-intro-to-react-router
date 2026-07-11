import React from 'react';
import { useLoaderData } from 'react-router';

const Posts = () => {
    const loadData = useLoaderData();
    return (
        <div>
            <h4>POSTS AMOUNT:{loadData.length}</h4>
        </div>
    );
};

export default Posts;