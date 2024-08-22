import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const { user, loginUser, logoutUser } = useContext(UserContext);

  const handleLogin = () => {
    loginUser({ description: "Selamat Datang Saeful" });
  };

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.description}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Anda Belum Login</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
