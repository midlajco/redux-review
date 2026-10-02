import { useDispatch, useSelector } from "react-redux"
import { loggin,loggout } from "./statusSlice"

function App() {
  
  const dispatch =useDispatch();
  const st =useSelector((state)=>{
    return state.status.value
  })
  console.log(st)

  return (
    <div>
      <h1>welcome</h1>
      <p>{st?"Loggedin":"loggedOut"}</p>
      <button onClick={()=>dispatch(st?loggout():loggin())} >{st?"loggout":"loggin"}</button>
       
    </div>
  )
}

export default App