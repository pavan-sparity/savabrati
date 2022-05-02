import { useState } from "react";
import { Button, Label, Form, FormGroup, Input, Col } from "reactstrap";
import "./Mobile_veri.css";
// import React,{ useEffect , useState } from 'react-router-dom';
import { useNavigate } from "react-router";
import { redirect } from "react";
import axios from "axios";

const SubmitOtp1 = () => {
  var navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [otp1, setOtp1] = useState("");
  const [submitted, setSubmitted] = useState("");

  // const {mobile,otp1} = data;
  const handleMobile = (e) => {
    setMobile(e.target.value);
    setSubmitted(false);
  };

  const handleOtp1 = (e) => {
    setOtp1(e.target.value);
    setSubmitted(false);
  };

  // useEffect(()=>{
  //     // localStorage.setItem("mb", JSON.stringify(data));
  //     // localStorage.setItem("mobileno",response.data.mb );
  //   },[])

  const submitHandler = (e) => {
    const data = {
      mobile_no: mobile,
    };
    var otp2 = localStorage.getItem("UserOTP2");
    if (otp1 == otp2) {
          alert("Otp match");
          navigate("/BenfTable");
          axios.post("http://localhost:4000/mobile", data).then(function (response) {
            e.preventDefault();
            if(response.data.status=='success')
            {
              // alert('data sent');
            }
            else
            {
              alert('data not sent'); 
            }
        } 
          )}
          else
          {
            alert('Otp doesnt match');
          }
  };

    //   const redirect = () => {
    //     window.location.href = '/SubmitOtp';
    //  }
  
  // localStorage.setItem('OTP', 'mb');

  // localStorage.setItem('mobileno',response.data.mb);

  return (
    <div className="App">
      <h2>Verify Mobile Number</h2>
      <Form className="form" onSubmit={submitHandler}>
        <FormGroup row>
          <Label for="exampleEmail" sm={4}>
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

          <Label for="exampleEmail" sm={4}>
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
            <Button color="danger" style={{ marginLeft: "190px" }}>
              SUBMIT
            </Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SubmitOtp1;

// // import { useState } from "react";
// import React, {useState} from 'react';

// const SubmitOtp = () => {

//     const [item, setItem]= useState(
//         {mobile1:'',
//         otp1:'',
//       });
//       var {mobile1,otp1}= item;
//       const onChange=e=>{
//         setItem({...item,[e.target.name]:[e.target.value]})

//       }
//       const submitHandler=e=>{
//           e.preventDefaults();
//           console.log(item);
//       }

//   return (
//     <div style={{marginTop:"200px"}}>
//         <center>
//             <form onSubmit={submitHandler}>
//             <h2>Submit The Details</h2>
//         <input type="text"  name="text"  onChange={onChange} value={mobile1} placeholder='Enter Mobile Number' /><br/><br/>
//         <input type="text"  name="text"  onChange={onChange} value={otp1} placeholder='Enter 4 digit OTP here' /><br/>
//         <button>Submit</button>
//         </form>
//         </center>

//     </div>
//   )
// }

// export default SubmitOtp
