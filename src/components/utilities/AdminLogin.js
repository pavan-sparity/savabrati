// import React, { useState } from 'react'
// import axios from 'axios';
// // import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//     const [user, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [msg, setMsg] = useState('');
//     // const history = useHistory();
//     const navigate = useNavigate();
 
//     const Auth = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:4000/admin/', {
//                 admin_username: user,
//                 admin_password: password
//             });
//             navigate('/Apanel');
//         } catch (error) {
//             if (error.response) {
//                 setMsg(error.response.data.msg);
//             }
//         }
//     }
  
//     return (
//         <section className="hero has-background-grey-light is-fullheight is-fullwidth">
//             <div className="hero-body">
//                 <div className="container">
//                     <div className="columns is-centered">
//                         <div className="column is-4-desktop">
//                             <form onSubmit={Auth} className="box">
//                                 <p className="has-text-centered">{msg}</p>
//                                 <div className="field mt-5">
//                                     <label className="label">Email or Username</label>
//                                     <div className="controls">
//                                         <input type="text" className="input" placeholder="Username" value={user} onChange={(e) => setUsername(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="field mt-5">
//                                     <label className="label">Password</label>
//                                     <div className="controls">
//                                         <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="field mt-5">
//                                     <button className="button is-success is-fullwidth">Login</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
 
// export default AdminLogin





























// import React,{useState, useEffect} from 'react'

// import axios from "axios"
// import { useHistory } from "react-router-dom";
// // import "./AdminLogin.css"

// // import {MdEmail} from "react-icons/md"
// // import {RiLockPasswordFill} from "react-icons/ri" 
// import { useStateValue } from './StateProvider'
// import { actionTypes } from './reducer'

// function AdminLogin() {

//     const [{}, dispatch] = useStateValue();

//     var [email,setEmail]=useState("");
//     var [password,setPassword]=useState("");

  
//     var history = useHistory();

//         async function admin_login_in(){
//                 var request = await axios.get(`http://localhost:8000/adminlogin/${email}/${password}`);
//                if(request.data.length >0){
//                    console.log("Logged IN!!!")
//                    console.log(request.data)
//                    dispatch({
//                     type:actionTypes.SET_ADMIN,
//                     admin:request.data[0].admin_name
//                     })
//                 }
//                 if(request.data.length == 0){
//                     alert ("username or Password is incorrect ")
//                 }
//             }
//     return (
//         <div className="loginContainer" style={{backgroundColor:"#F9DC5C"}} >
//         <div className="login" >

//                     <h2 style={{textAlign:"center",}}>Admin Login</h2>
                    
//                     <div className="group">
//                         <label for="user" className="label" style={{paddingLeft:"0px"}}> E-mail</label>
//                         <input id="user" type="email"  onChange={(e)=>{setEmail(e.target.value)}}/>
//                     </div>
//                     <div className="group">
//                         <label for="pass" className="label" style={{paddingLeft:"0px"}}>Password</label>
//                         <input id="pass" type="password"   onChange={(e)=>{setPassword(e.target.value)}} data-type="password" />
//                     </div>
                    
//                     <div className="group">
//                         <button className="" style={{padding:"10px 20px",outline:"none",border:"none",backgroundColor:"orange",color:"white",cursor:"pointer",fontWeight:"600"}} value="Sign In" onClick={admin_login_in}>Sign In</button>
//                     </div>
           
//                 </div>
//                <br></br>
//                 </div>
           

//     )
// }

// export default AdminLogin




import React, { useState } from 'react';
// import axios from 'axios';
// import { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
// import {useHistory} from 'react-router-dom'
import './AdminLogin.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import photo1 from '../assets/Img/photo1.jpg'


const AdminLogin = ()=> {


    let navigate = useNavigate();
    // const [username,setUsername]= useState('');
    // const [password, setPassword]= useState('');
    // const [submitted, setSubmitted]= useState("");

    // const handleUsername=(e)=>{
    //   setUsername(e.target.value);
    //   setSubmitted(false);

    // }


    // const handlePassword=(e)=>{
    //   setPassword(e.target.value);
    //   setSubmitted(false);

    // }

    const [data, setData]=useState({
      username:'',
      password:''
    })


    
      const {username,password}= data;
      const onChange =e=>{
        setData({...data,[e.target.name]:[e.target.value]})
      }
      
    

    const submitHandler = (e) => {
      e.preventDefault();
      console.log(data);
      axios
        .get("http://localhost:4000/admin")
        .then(function (response) {
          if (response.data[1].admin_username==username&&response.data[1].admin_password==password) 
          {
            console.log(response.data.data);
            navigate("/Apanel");
          } 
          else 
          {
            alert("your entered fields are Wrong");
          }
        });
  
      // alert("successfully sended OTP");
    };

    // const myStyle={
    //   backgroundImage:"url('../assets/Img/photo1.jpg')",
      // height:'100vh',
      //       // marginTop:'-70px',
      //       // fontSize:'50px',
      //       backgroundSize: 'cover',
      //       backgroundRepeat: 'no-repeat',
    
    // }






     
    return (
      <div className='adminpage'>
        <div className="App">
        <h2>Admin Login</h2>
        <Form className="form" onSubmit={submitHandler}>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="text"
              name="username"
              id="exampleEmail"
              placeholder="username"
              value={username}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              value={password}
              onChange={onChange}
            />
          </FormGroup>
        {/* <Button onClick={()=> history.push('/Apanel')}>Submit</Button> */}
     
        <Button>Submit</Button>

      </Form>
      
    </div>
    </div>

  );


}
export default AdminLogin;