import { useState } from "react";
import { Button, Label, Form, FormGroup, Input, Col } from "reactstrap";
import "./Mobile_veri.css";
// import React,{ useEffect , useState } from 'react-router-dom';
import { useNavigate } from "react-router";
import { redirect } from "react";
import axios from "axios";

const Mobile_veri = () => {
  var navigate = useNavigate();
  const [data, setData] = useState({ mobile: "" });

  const { mobile } = data;
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  // useEffect(()=>{
  //     // localStorage.setItem("mb", JSON.stringify(data));
  //     // localStorage.setItem("mobileno",response.data.mb );
  //   },[])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .get("http://localhost:4000/validateuser/" + mobile)
      .then(function (response) {
        if (response.data.status == "success") {
          console.log(response.data.data);
          localStorage.setItem("UserOTP", response.data.data.OTP);
          localStorage.setItem("mobileno", response.data.data.mb);
          navigate("/SubmitOtp");
        } else {
          alert("Mobile Number already exists try another");
        }
      });

    // alert("successfully sended OTP");
  };

  return (
    
    <div className="App">
      <h2>Verify Mobile Number</h2>
      <Form className="form" onSubmit={submitHandler}>
        <FormGroup Row>
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
              onChange={onChange}
            />
          </Col>

          <div>
            <Button color="danger" style={{ marginLeft: "190px" }}>
              Get OTP
            </Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Mobile_veri;
