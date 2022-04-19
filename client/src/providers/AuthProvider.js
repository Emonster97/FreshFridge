import { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  // is setUser even being passed properly

  // Perform login process for the user & save authID, etc
  const login = function(email, password) {
    setAuth(true);
    const id = "1";  // Some random userId
    setUser({ email, id, name: "Wilfred Emonts", age: 25, weight: 180, height: 72, exercise:1.2,
    goal:0, exclusions:"",
    diet:"" });
  };

  const logout = function() {
    setAuth(false);
    setUser(null);
  };

  // authContext will expose these items
  const userData = { auth, user, login, logout, setUser };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};