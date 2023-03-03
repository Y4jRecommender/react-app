import './App.css';
import AuthProvider from './Context/authContext';
import Routing from './Routes';
import { GoogleOAuthProvider } from "@react-oauth/google"
import Navbar from './Component/Navbar';

function App() {
  const GoogleClientID = process.env.REACT_APP_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={GoogleClientID}>
        <AuthProvider>
          <Navbar />
          <Routing />
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
