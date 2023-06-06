import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, handleLogin, fetchProfile } = useContext(AppContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <div
        className="bg-image d-flex justify-content-center align-items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473654729523-203e25dfda10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
          height: "80vh",
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        ></div>
        <form className="mb-6 text-white">
          <div className="form-outline mb-4">
            <input type="email" id="form1Example1" class="form-control" />
            <label class="form-label text-white" for="form1Example1">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="password" id="form1Example2" class="form-control" />
            <label class="form-label text-white" for="form1Example2">
              Password
            </label>
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                  checked
                />
                <label class="form-check-label d-flex" for="form1Example3">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block">
            Sign in
          </button>
        </form>
      </div>

      <div>
        {data.login && (
          <>
            <div>Access: {data.login.access}</div>
            <div>Refresh: {data.login.refresh}</div>
            <button onClick={() => fetchProfile(data.login)}>
              Fetch profile
            </button>
          </>
        )}
      </div>
      {data.profile && (
        <div>
          Name: {data.profile.first_name} {data.profile.last_name}
        </div>
      )}
    </>
  );
};

export default Auth;
