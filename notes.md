<!-- These are three common ways to load data in React and React Router. -->
## 1. use + fetch + Suspense
This is the newer React approach. You create a promise with fetch(), pass it to a component, and React's use() hook reads the data. While the data is loading, Suspense shows a fallback UI.


How it works
fetch() starts the API request.
use() waits for the promise.
Suspense displays "Loading...".
When the data arrives, React renders the component.


## 2. useState + useEffect([])
This is the traditional React way.

import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

How it works
Component renders.
useEffect() runs after rendering.
fetch() requests data.
setUsers() updates the state.
React renders again with the new data.

## 3. React Router loader + useLoaderData()

This is React Router's built-in data-loading system.

Router configuration:
{
  path: "/users",
  loader: () =>
    fetch("https://api.example.com/users"),
  element: <Users />
}
Component
import { useLoaderData } from "react-router-dom";

function Users() {
  const users = useLoaderData();

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
How it works
User visits /users.
React Router runs the loader.
Data is fetched before rendering.
useLoaderData() receives the data.


## Quick comparison
Method	               Where it works	 Loading state
use + Suspense	       Modern React	     Suspense
useState + useEffect   Any React app	 Manual
loader + useLoaderData React Router	     Router handles it
