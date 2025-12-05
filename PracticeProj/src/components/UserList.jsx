import React, { useState, useEffect } from "react";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUsers() {
      try {
        const fetchUsers = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await fetchUsers.json();
        if (data.ok) {
          setUsers(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  },[]);

  if(loading) return <p>Loading Users...</p>
  if (error) return <p style={{ color: "red" }}>{error}</p>

  return (
    <div>
        <h2>User List</h2>
        <ul>
            {
                users.map((user)=>(<li key={user.id}>{username},{user.email}</li>))
            }
        </ul>
    </div>
  );
};
export default UserList;
