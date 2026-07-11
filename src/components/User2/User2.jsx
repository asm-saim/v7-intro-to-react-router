import React from 'react';
import { use } from 'react';

const User2 = ({ susDataLoad }) => {

    const data = use(susDataLoad)
    console.log(data)
    return (
        <div>
            <h5>This is user 2 using Suspense to load data</h5>
        </div>
    );
};

export default User2; 