import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const { user, loginUser, logoutUser } = useContext(UserContext);

  const handleLogin = () => {
    loginUser({ name: 'John Doe', email: 'john@example.com' });
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default UserProfile;
