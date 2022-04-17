import { useContext, useEffect } from 'react';
import { authContext } from '../providers/AuthProvider';
import {useNavigate} from "react-router-dom";

export default function Info() {
  const { user, logout } = useContext(authContext);
  const location = useNavigate();

  function onLogout() {
    logout();
    location("/login");
  }
  // Show user Info
  return (
    <div>
      <p className="UserInfo">
        You are logged in <br/>
        Email: {user.email}<br/>
        Name: {user.name}<br/>
        UserId: {user.id}<br/>
      </p >
      <p>
        <button type="button" onClick={onLogout}>Logout</button>
      </p>

    </div>
  );
};