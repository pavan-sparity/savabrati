import { useState } from 'react';
import { Button,
    Label,
    Form,
    FormGroup,
    Input,
    Col} from 'reactstrap';
import './Mobile_veri.css';
// import React,{ useEffect , useState } from 'react-router-dom';  
import { useNavigate } from 'react-router';
import { redirect } from 'react';
import axios from 'axios';


const UserOtp = () => {
  
  var navigate = useNavigate();
   const [mobile, setMobile]= useState("");
   const [otp1, setOtp1]= useState("");
   const [submitted, setSubmitted]= useState("");
    
    // const {mobile,otp1} = data;
    const handleMobile= (e)=>{
        setMobile(e.target.value);
        setSubmitted(false);
    };

    const handleOtp1= (e)=>{
        setOtp1(e.target.value);
        setSubmitted(false);
    };
    
    // useEffect(()=>{
    //     // localStorage.setItem("mb", JSON.stringify(data));
    //     // localStorage.setItem("mobileno",response.data.mb );
    //   },[])

      const submitHandler= e =>{
          const data={
              mobile_no:mobile
          }
        }
        
        // console.log(data);
    //     axios.post("http://localhost:4000/mobile",data).then(
    //     function (response) {
    //         console.log(data)
    //         e.preventDefault();
    //       if(response.data.status=='success')
    //       {
    //        var otp2= localStorage.getItem('UserOTP');
    //        var mobile2=localStorage.getItem('mobileno');
    //       if(mobile==mobile2 && otp1==otp2)
    //       {
    //          alert('succsess!');
    //          navigate('/Home');
    //       }  
    //       else
    //       {
    //           alert('Otp doesnt match');
    //       }
    //   }
    //   else{
    //    alert('error');       
    // }
    // })
        
      //   const redirect = () => {
      //     window.location.href = '/SubmitOtp';
      //  }
//    }
      // localStorage.setItem('OTP', 'mb');
     
      // localStorage.setItem('mobileno',response.data.mb);
      const verify=()=>{
        var pass=localStorage.getItem('UserOTP1');
        if(otp1==pass)
        {
        navigate('/User_P');
        
        }
        else{
          alert("missing details");
        }

      }



  return (
    <div className='forms'>
    <div className='App'>
        
        <h2>Verify Mobile Number</h2>
  <Form className="form" onSubmit={submitHandler}>
    <FormGroup row>
          <Label
                  for="exampleEmail"
                  sm={4}
          >
                   Phone Number
          </Label>
      <Col sm={10}>
      <Input
          id="exampleEmail"
          name="mobile"
          placeholder="Enter Mobile Number"
          type="number"
          value={mobile}
          onChange={handleMobile}
        />
      </Col>


      <Label
                  for="exampleEmail"
                  sm={4}
          >
                   OTP
          </Label>
      <Col sm={10}>
      <Input
          id="exampleEmail"
          name="mobile"
          placeholder="Enter Mobile Number"
          type="number"
          value={otp1}
          onChange={handleOtp1}
        />
      </Col>
      
  
        <div>
          <Button
                color="danger"
                style={{marginLeft: "190px"}}
                onClick={verify}
            
          >
            SUBMIT
          </Button >
        </div>
        </FormGroup>
  </Form>
    </div>
    </div>

    
  )
}

export default UserOtp;
