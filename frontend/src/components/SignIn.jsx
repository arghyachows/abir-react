import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

function SignIn() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      {value ? (
        <Home />
      ) : (
        <>
          <div className="stars">
            <div className="twinkling">
              <div className="login-box">
                <h2>Login</h2>
                <form>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Login" />
                    <button onClick={handleClick}>Signin With Google</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default SignIn;
