import { createContext, useState } from "react";

const GoogleAuth = createContext();

export function LoginProvider({ children }) {
  const [googleuser, setGoogleUser] = useState({});
  return (
    <GoogleAuth.Provider value={{ googleuser, setGoogleUser }}>
      {children}
    </GoogleAuth.Provider>
  );
}

export default GoogleAuth;
