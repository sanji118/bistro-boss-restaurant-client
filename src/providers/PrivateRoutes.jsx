import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth'

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    if(loading){
        return <span className='loading loading-spinner loading-md'></span>
    }
    if(user){
        return children;
    }


  return (
    <Navigate to={'/auth/login'}></Navigate>
  )
}

export default PrivateRoutes