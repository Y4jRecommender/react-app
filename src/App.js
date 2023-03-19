import './App.css';
import AuthProvider from './Context/authContext';
import Routing from './Routes';
import { GoogleOAuthProvider } from "@react-oauth/google"
import Navbar from './Component/Navbar';
import SectionProvider from './Context/sectionContext';

function App() {
  const GoogleClientID = process.env.REACT_APP_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={GoogleClientID}>
        <AuthProvider>
          <SectionProvider>
            <Navbar />
            <Routing />
          </SectionProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
