import  { useState, useEffect, useContext , React}  from 'react'
import { AuthContext } from '../../Context/authContext';

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const {auth, email} = authContext;
  return (
    <>
      <div>
        Welcome to the application
      </div>
      {auth && (
        <>
          <div>
            {email}
          </div>
        </>
      )}
    </>
  )
}