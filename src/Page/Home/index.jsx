import  {useContext , React, useEffect}  from 'react'
import { AuthContext } from '../../Context/authContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const authContext = useContext(AuthContext);
  const {auth} = authContext;
  const navigate = useNavigate();
  
  useEffect(() => {
    if(auth){
      navigate('/dashboard');
    }
  }, [auth, navigate]);
  
  return (
    <>  
       {!auth && (
        <>
          <div>
            Welcome to the home
          </div>
        </>)}
    </>
  )
}