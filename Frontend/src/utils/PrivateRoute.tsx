
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute1() {
    //@ts-expect-error
    const {currentUser}= useSelector((state)=>state.user);
  return (
    
    <div>
        {currentUser? ( <Outlet/> ) : ( <Navigate to='/signin'/>) }
    </div>
  )
}


export const  PrivateRoute2=()=>{
  //@ts-expect-error
  const {currentUser}= useSelector((state)=>state.user);
  return(
    <div>
      {currentUser? (<Navigate to= '/profile'/>) : ( <Outlet/> )}
    </div>
  )
}

export default PrivateRoute1
