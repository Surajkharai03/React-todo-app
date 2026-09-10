import { useState } from "react";

const app = () => {

  const [username, setusername] = useState("Suraj");

  const changehandler = () => {
    setusername("Divii");
  }

  console.log(username);

  return (
    <div>
      <h1>Username</h1>
      <h2>{username}</h2>

      <button onClick={changehandler}>
        Change Name
      </button>
    </div>
  );
};

export default app;