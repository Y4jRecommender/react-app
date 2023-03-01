import './App.css';
import AuthProvider from './Context/authContext';
import Dashboard from './Page/Dashboard';
function App() {
  return (
    <>
      <AuthProvider>
        <Dashboard />
      </AuthProvider>
    </>
  );
}

export default App;
