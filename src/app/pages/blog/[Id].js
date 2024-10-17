// pages/blog/[userId].js

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function UserDetails() {
  const router = useRouter();
  const { userId } = router.query;
  const [userData, setUserData] = useState(null);

  console.log(userId);

  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
          setUserData(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [userId]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {userData.id}</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Render other user details as needed */}
    </div>
  );
}

export default UserDetails;
