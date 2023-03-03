import  {useContext , React, useEffect}  from 'react'
import { AuthContext } from '../../Context/authContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const {auth} = authContext;
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth){
      navigate('/');
    }
  }, [auth, navigate]);
  return (
    <>
      <div>
        You are on the dashboard now
      </div>
    </>
  )
}