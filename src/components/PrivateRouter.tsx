import React, { Children } from 'react'
import {Navigate} from 'react-router-dom'


type PrivateRouterProps = {
    children: JSX.Element;
}

const PrivateRouter = (props: PrivateRouterProps) => {
  const email = JSON.parse(localStorage.getItem('user')).user.email;
    
    
    if(email == "admin@gmail.com"){
      return props.children
    }else{
      return <Navigate to="/signin" />
    }
}
export default PrivateRouter