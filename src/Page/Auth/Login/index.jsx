import { React, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../../../Context/authContext";

export default function Login() {
  const authContext = useContext(AuthContext);
  const { auth, LoginGoogle, Logout, email} = authContext;

  const GoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      LoginGoogle(tokenResponse.access_token);
    },
  });
  
  return (
    <>
      <h1>{email}</h1>
      {auth ? (
        <button onClick={Logout}>Logout</button>
      ) : (
        <button onClick={GoogleLogin}>Login</button>
      )}

    </>
  )
}