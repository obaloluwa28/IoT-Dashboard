import React,{useState, useEffect} from 'react'
import './signin.css'
import { AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai";
import axios from 'axios';
import Loading from '../../Components/Loading/Loading'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Signin = ({setsiginState}) => {
  const [isSignUp, setIsSignUp] = useState("1")
  const [firstname, setFirstname] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [conPassword, setConPassword] = useState("")
  const [authkey, setAuthkey] = useState("")
  const [passwordVis, setPasswordVis] = useState(false)
  const [textvis, setTextvis] = useState(true)
  const [notloading, setNotloading] = useState(false)
  const [loadingstate, setLoadingstate] = useState("")
  const [serveresp, setServeresp] = useState("")
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['Token']);
  const API = 'http://localhost:5000'

  useEffect(() => {
    setsiginState()
    // setCookie('refreshToken', "undefined", { path: '/'});
  })

  const ToggleSign = () =>{
    setIsSignUp("2")
    setUsername("")
    setPassword("")
    setNotloading(false)
  }

  const ToggleReg = () =>{
    setIsSignUp("1")
    setUsername("")
    setPassword("")
    setConPassword("")
    setFirstname("")
    setNotloading(false)
  }

  const changeVisib = () =>{
    setTextvis(!textvis);
    setPasswordVis(!passwordVis)
  }

  const handleOnchange =  (e) =>{
    if (e.target.name === "myemail"){
        setUsername(e.target.value)
    }

    if (e.target.name === "mypassword"){
        setPassword(e.target.value)
    }

    if (e.target.name === "myConpsw"){
      setConPassword(e.target.value)
    }

    if (e.target.name === "fname"){
      setFirstname(e.target.value)
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (isSignUp === "1"){
      setNotloading(true)
      setLoadingstate("login")
      let Sobj = {
        email: username,
        password: password
      }
      console.log(Sobj)
      try{
        await axios.post(`${API}/login`, Sobj).then((response) => {
            console.log(response.data);
            if(response.data.status === 201){
                navigate ('/dashboard')
              }
            else{
              console.log('error')
            }
        });
      } catch(e){
        setServeresp("error")
        if(e.message.includes('404')){
          console.log(e.message)
          setLoadingstate("Email not match!")
        } else if(e.message.includes('400')){
          console.log(e.message)
          setLoadingstate("Password Incorrect")
        } else if(e.code === 'ERR_NETWORK'){
          setLoadingstate("Internet Connection Down")
        }
      }
      
    } else if(isSignUp === "2"){
      setNotloading(true)
      setLoadingstate("register")
      let Robj = {
        name: firstname,
        email: username,
        password: password,
        confPassword: conPassword
      }
      console.log(Robj)
      try{
        await axios.post(`${API}/users`, Robj).then((response) => {
          console.log(response.data)
            if(response.data.status === 201){
                console.log(response.data.msg);
                setNotloading(false)
                setIsSignUp("3")
            }
            else{
              console.log('error')
            }
        });
      } catch(e){
        setServeresp("error")
        if(e.message.includes('404')){
          console.log(e.message)
          setLoadingstate("Server Unreachable")
        } else if(e.code === 'ERR_NETWORK'){
          setLoadingstate("Internet Connection Down")
        }
      }
    } else{
      setNotloading(true)
      let Aobj = {
        Authkey: authkey
      }
      console.log(Aobj)
      setNotloading(false)
      setIsSignUp("4")
      // axios.post(`${API}/authkey`, Aobj).then((response) => {
      //   // axios.post(`https://sterling-smart-meter-backend.herokuapp.com/login`, Aobj).then((response) => {
      //     if(response.status === 200){
      //         console.log(response.data.message);
      //         if(response.data.message === "true"){
      //         //   navigate ('/dashboard')
      //            setNotloading(false)
      //            setIsSignUp("3")
      //         }
      //         else{
      //           console.log("Incorrect Username or Password")
      //           setServeresp("error")
      //         }
      //       }
      //     else{
      //       console.log('error')
      //     }
      // });
    }

  }

  const toggleErrorComp = () =>{
    setNotloading(false)
  } 

  return (
    <div className="signup-contain">
    <div className="signup-cont">
      {isSignUp === "1" ? <div className="c-left"></div> : isSignUp === "2" ?
      <div className="c-left-reg"></div>: <div className="c-left-oth"></div>}
      {isSignUp === "1" ?
      <div className="c-right">
        <form className="form" onSubmit={handleSubmit}>
            <span>Smart Homes!</span>
            <span className='motto'>If it uses Power, it can be Controlled! </span>
            <div className="horizontal-rule"><hr id="rule" /><span>or</span><hr id="rule" /></div>
            <div className="label-container">
                <span>Your Email</span>
                <input required name="myemail" value={username} onChange={handleOnchange} className="inputBox" type="email" placeholder="Write your email"/>
            </div>

            <div className="label-container">
                <span>Password</span>
                <input required name="mypassword" value={password} onChange={handleOnchange} className="inputBox" type={textvis ? "password" : "text"} placeholder="Write your password"/>
                <span onClick={changeVisib}>{passwordVis ? <AiOutlineEyeInvisible id="eyeIcon"/> : <AiOutlineEye id="eyeIcon"/>}</span> 
            </div>

            <input type="submit" className="inputButtn" text="Sign In" />
            <span>Don't have an account? <span onClick={ToggleSign} id="toggle">Signup Now!</span></span>
            {notloading && <Loading loadingstatus={loadingstate} loadingresp={serveresp} changeErrorDisp={toggleErrorComp} text="Loading Dashboard ..."/> }
        </form>
      </div> : isSignUp === "2" ?
      <div className="c-right">
        <form className="form" onSubmit={handleSubmit}>
              <div id="register">Register Now!</div>
              <div className="label-container">
                <span>Firstname</span>
                <input required className="inputBox" name="fname" value={firstname} onChange={handleOnchange} type="text" placeholder="Fullname"/>
              </div>

              <div className="label-container">
                <span>Email</span>
                <input required className="inputBox" name="myemail" value={username} onChange={handleOnchange} type="email" placeholder="Enter email"/>
              </div>

              <div className="label-container">
                <span>Choose a Password</span>
                <input required className="inputBox" name="mypassword" value={password} onChange={handleOnchange} type={textvis ? "password" : "text"} placeholder="Enter Password"/>
                <span onClick={changeVisib}>{passwordVis ? <AiOutlineEyeInvisible id="eyeIcon"/> : <AiOutlineEye id="eyeIcon"/>}</span>
              </div>

              <div className="label-container">
                <span>Confirm password</span>
                <input required className="inputBox" name="myConpsw" value={conPassword} onChange={handleOnchange} type="password" placeholder="Confirm your password"/>
              </div>

              <input type="submit" className="inputButtn" text="Sign Up" />
              <span>Already have an account? <span onClick={ToggleReg} id="toggle">SignIn Now!</span></span>
              {notloading && <Loading loadingstatus={loadingstate} loadingresp={serveresp} changeErrorDisp={toggleErrorComp} text="Registering User ..."/> }
        </form>
      </div> : isSignUp === "3" ? 
      <div className="c-right">
        <form className="form" onSubmit={handleSubmit}>
              <div id="register">Authenticate Account!</div>
              <span>Check your Email for Authentication Key </span>

              <div className="label-container">
                <span>Auth. Key</span>
                <input className="inputBox" type="text" placeholder="Set auth. key"/>
              </div>

              <input type="submit" className="inputButtn" text="Sign Up" />
              {notloading && <Loading loadingstatus={loadingstate} loadingresp={serveresp}/> }
        </form>
      </div> : 
      <div className="c-right">
        <form className="form" onSubmit={handleSubmit}>
              <div id="register3">Account Created Successfully!</div>
              <span onClick={ToggleReg} id="toggle">SignIn Now!</span>
        </form>
      </div>}
    </div>
  </div>
  )
}

export default Signin