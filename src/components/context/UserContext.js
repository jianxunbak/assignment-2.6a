import { createContext, useState } from "react";
// Step 1: Create a context object

export const UserContext = createContext();

// Step 2: Set up a Context Provider
export function UserProvider({ children }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleCredentialsChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    alert(
      `Logged in with username: ${credentials.username} and password: ${credentials.password}`
    );
  };

  const contextValue = {
    credentials,
    setCredentials,
    handleCredentialsChange,
    handleLogin,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
