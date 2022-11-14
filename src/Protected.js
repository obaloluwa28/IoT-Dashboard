import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const useAuth=()=>{
   const [cookies] = useCookies(['Token']);
   const user=cookies.Token
   console.log(`OBA : ${user} `)
   
   if(user === "undefined") {
      return false
   } else {
      return true
   }
}

const PrivateRoute = (props) => {   
   const auth=useAuth()
   // console.log(`Logged In ? ${auth}`)
   return auth ? <Outlet/>: <Navigate to="/"/>
}

export default PrivateRoute