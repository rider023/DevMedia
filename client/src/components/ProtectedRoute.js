import {Outlet, useNavigate } from 'react-router-dom'
 
 
 export const ProtectedRoute = (props) => {
    let navigate = useNavigate()
    if (localStorage.getItem('user')) {
      return <Outlet {...props} />
    } else {
      navigate('/login')
    }
  }

  