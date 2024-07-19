import { useState, useContext } from "react";
import { AccountContext } from "../store/AccountContext";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useContext(AccountContext);

  function handleSignIn() {
    localStorage.setItem("account_context", JSON.stringify({
      email : email,
      password : password
    }));
    setAuth(JSON.stringify({
      email : email,
      password : password
    }));
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(217, 189, 223)",
      }}
    >
      <div>
        <h3 style={{ textAlign: "center" }}>Sign In to your Workspace</h3>
        <div>
          <label
            htmlFor="email"
            style={{ display: "inline-block", width: "80px" }}
          >
            Email :
          </label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <label
            htmlFor="password"
            style={{ display: "inline-block", width: "80px" }}
          >
            Password :
          </label>
          <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={handleSignIn} style = {{ cursor : "pointer" }}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
