import React, { useState, useContext } from "react";
import { AppContext } from '../AppContext';

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
        className="image-container bg-image d-flex justify-content-center align-items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473654729523-203e25dfda10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
          height: "100vh",
        }}
      ></div>
    
      {/* <div>
        {data.login &&
          <>
            <div>Access: {data.login.access}</div>
            <div>Refresh: {data.login.refresh}</div>
            <button onClick={() => fetchProfile(data.login)}>Fetch profile</button>
          </>
        }
      </div>
      {data.profile &&
        <div>Name: {data.profile.first_name} {data.profile.last_name}</div>
      } */}
    </>
  );
};

export default Auth;
