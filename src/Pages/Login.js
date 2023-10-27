import '../Style/Login.css'
import innologo from '../Components/innologo.jpg';

function handleClick() {
    window.location.href = './dashboard';
  }
const Login = () => {
    return(
      <>
      <form id='background'>
        <div className='logindiv'>
        <div class="containerlog">
        <div className='image'>
        <img src={innologo} alt="Logo" className='img'/>;
        </div>

         <div>
            <input type='text' placeholder='Email' className='inplog form-control' min={1}/>

         </div>
          
          <div>
          <input type='email' placeholder='Password' className='inplog form-control' min={1}/>
          </div>

            <button id="buttonlog" onClick={handleClick} className='form-control' type="submit" name="Login">LOGIN</button>
            <div> <a id="fp" href="/Users/ForgetPassword"> Reset Password?</a>
            <a id="fp" href="/Users/NewUser">Sign Up </a></div>
        </div>
        </div>
        </form>
      </>
    );
};
export default function viewLogin(){
    return<Login/>
}