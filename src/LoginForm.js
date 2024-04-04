import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


export default function LoginForm(){
  return(
    <><div id ="wrapper">
      <form action="">
        <h1>Login</h1>
        <div id="inputbox">
          <input type="text" placeholder="UserName" required /><FaUser id="icon"/><br/>
          <div id="inputbox">
            <input type="password" placeholder="Password" required /><FaLock id="icon"/>
            </div>

          </div>
          <div id="remember-forgot">
            <label className='remember'><input type="checkbox" />Remember Me</label>
            
          </div>
         
          <button type="submit" className='butt'>Login</button>
          <div id="forgot">
          <a href="#">Forgot Password</a>
          </div>
          
          </form>
          </div></>
  )
}