import { useContext } from "react";

import styles from "./UserBar.module.css";
import { UserContext } from "./context/UserContext";

function UserBar() {
  // Step 4: Apply the useContext hook
  const userCtx = useContext(UserContext);
  const { credentials, handleCredentialsChange, handleLogin } = userCtx;

  //   const [credentials, setCredentials] = useState({
  //     username: "",
  //     password: "",
  //   });

  //   const handleCredentialsChange = (event) => {
  //     setCredentials((prevCredentials) => {
  //       const newCredentials = {
  //         ...prevCredentials,
  //         [event.target.name]: event.target.value,
  //       };
  //       return newCredentials;
  //     });
  //   };

  //   const handleLogin = (event) => {
  //     event.preventDefault();
  //     alert(
  //       `Logged in with username: ${credentials.username} and password: ${credentials.password}`
  //     );
  //   };

  return (
    <div className={styles.userBarContainer}>
      <form className={styles.userBarForm} onSubmit={handleLogin}>
        <label htmlFor="username">username</label>
        <input
          name="username"
          value={credentials.username}
          onChange={handleCredentialsChange}
        />
        <label>password</label>
        <input
          name="password"
          value={credentials.password}
          onChange={handleCredentialsChange}
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default UserBar;
