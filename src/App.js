import './App.css';
import AuthProvider from './Context/authContext';
function App() {
  return (
    <>
      <AuthProvider>
        <h1>
          Hello World
        </h1>
      </AuthProvider>
    </>
  );
}

export default App;
