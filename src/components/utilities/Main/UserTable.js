import { useState } from 'react';
import axios from 'axios';
import {Input,Col,Row,FormGroup,Label, Button} from 'reactstrap';
// import './Header.module.css';
// import './Content.css';


export default function Form() {

// States for registration
const [name, setname] = useState('');
const [age,setage] = useState("");
  const [gender,setgender] = useState("");
  const [bloodgroup,setbloodgroup] = useState("2");
  const [mobile1,setmobile1] = useState("");
  const [mobile2,setmobile2] = useState("");
  const [email,setemail] = useState("");
  const [address,setaddress] = useState("");
  const [country,setcountry] = useState("");
  const [state,setstate] = useState("");
  const [district,setdistrict] = useState("");
  const [area,setarea] = useState("");
  const [pincode,setpincode] = useState("");
  const [status,setstatus] = useState("");


// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handlename = (e) => {
	setname(e.target.value);
	setSubmitted(false);
};


const handleage = (e) => {
    setage(e.target.value);
    setSubmitted(false);
  };
 
  
  const handlegender = (e) => {
    setgender(e.target.value);
    setSubmitted(false);
  };

  
  const handlebloodgroup = (e) => {
    setbloodgroup(e.target.value);
    setSubmitted(false);
  };

  
  const handlemobile1 = (e) => {
    setmobile1(e.target.value);
    setSubmitted(false);
  };
 
  
  const handlemobile2 = (e) => {
    setmobile2(e.target.value);
    setSubmitted(false);
  };

 
  const handleemail = (e) => {
    setemail(e.target.value);
    setSubmitted(false);
  };
 
 
  const handleaddress = (e) => {
    setaddress(e.target.value);
    setSubmitted(false);
  };

  
  const handlecountry = (e) => {
    setcountry(e.target.value);
    setSubmitted(false);
  };
 
  
  const handlestate = (e) => {
    setstate(e.target.value);
    setSubmitted(false);
  };

  
  const handledistrict = (e) => {
    setdistrict(e.target.value);
    setSubmitted(false);
  };
 
  
  const handlearea = (e) => {
    setarea(e.target.value);
    setSubmitted(false);
  };

  
  const handlepincode = (e) => {
    setpincode(e.target.value);
    setSubmitted(false);
  };
 
  
  const handlestatus = (e) => {
    setstatus(e.target.value);
    setSubmitted(false);
  };

// Handling the form submission
const handlesubmit = (e) => {
    const data = {
      user_fullname:name,
      user_age:age,
      user_gender:gender,
      user_bloodgroup:bloodgroup,
      user_mobile1:mobile1,
      user_mobile2:mobile2,
      user_emailid:email,
      user_fulladdress:address,
      user_country:country,
      user_state:state,
      user_district:district,
      user_area:area,
      user_pincode:pincode,
      userstatus:status
    }
    axios.post("http://localhost:4000/usersignup", data);
    console.log(data);
	e.preventDefault();
	if (name === '' || age === '' || gender === '' || bloodgroup === '' || mobile1 === '' || mobile2 === '' || email === '' || address === '' || country === '' || state === '' || district === '' || area === '' || pincode === '' || status === '') {
		setError(true);
        // alert("successfully Added data")
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h3 style={{color:"red"}}>User {name} successfully registered!!</h3>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h3 style={{color:"red"}}>Please enter all the fields</h3>
	</div>
	);
};

return (
	<div className="form" style={{marginTop:'80px', textAlign:'center'}}>
	<div>
		<h1>User Registration</h1>
	</div>

	
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>
    <div><h4>Personal Information</h4></div>
<form style={{margin:"30px", padding:"20px", border:"2px solid green"}}>
    <Row>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleName">
          NAME
        </Label>
        <Input
        placeholder='Enter Your Full Name'
         onChange={handlename} className="input"
         value={name} type="text"
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="examplePassword">
          AGE
        </Label>
        <Input
         onChange={handleage} className="input"
         placeholder='Enter your Age'
         value={age} type="text" 
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="examplePassword">
          GENDER
        </Label>
        <Input
        id="exampleSelect"
        type="select"
        name="gender" onChange={handlegender}  value={gender}
      >
        <option>
          --SELECT--
        </option>
        <option  value={1}>
          MALE
        </option>
        <option  value={2}>
          FEMALE
        </option>
        <option  value={3}>
          OTHER
        </option>
       
      </Input>
      </FormGroup>
    </Col>

  </Row>


  <Row>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleName">
          EMAIL
        </Label>
        <Input
         type="text" placeholder="Enter Email" name="email" onChange={handleemail}  value={email}
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="examplePassword">
          MOBILE
        </Label>
        <Input
         type="text" placeholder="Enter your Mobile number" name="mobile1" onChange={handlemobile1}  value={mobile1}
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="examplePassword">
          ALTERNATE MOBILE
        </Label>
        <Input
         type="text" placeholder="Enter your other number" name="mobile2" onChange={handlemobile2}  value={mobile2}
        />
       
      
      </FormGroup>
    </Col>

  </Row>

  <Row>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleName">
        BLOOD GROUP
        </Label>
        <Input
        id="exampleSelect"
        type="select"
        name="bloodgroup" onChange={handlebloodgroup}  value={bloodgroup}
      >
        <option>--Select Blood--</option>
        <option value={1}>A+</option>
        <option value={2}>A-</option>
        <option value={3}>B+</option>
        <option value={4}>B-</option>
        <option value={5}>AB+</option>
        <option value={6}>AB-</option>
        <option value={7}>O+</option>
        <option value={8}>O-</option>
       
      </Input>
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="examplePassword">
        REGISTER AS A DONOR
        </Label>
        <Input
        id="exampleSelect"
        type="select"
        name="status" onChange={handlestatus}  value={status}
      >
         <option>-Select-</option>
        <option value={1}>Yes</option>
        <option value={2}>No</option>
       
      </Input>
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="examplePassword">
        FULL ADDRESS
        </Label>
        <Input
         type="text" placeholder="Enter Your Full Address" name="address" onChange={handleaddress}  value={address}
        />
       
      
      </FormGroup>
    </Col>

  </Row>


  <Row>
    <Col md={4}>
    <FormGroup>
        <Label for="examplePassword">
        PINCODE
        </Label>
        <Input
         type="text" placeholder="Enter your Pincode" name="pincode" onChange={handlepincode}   value={pincode}
        />
       
      
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="examplePassword">
        COUNTRY
        </Label>
        <Input
        id="exampleSelect"
        type="select"
        name="country" onChange={handlecountry}  value={country}
      >
        <option>-Select Country-</option>
        <option value={1}>India</option>
        <option value={2}>USA</option>
        <option value={3}>UK</option>
       
      </Input>
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="examplePassword">
        STATE
        </Label>
        <Input
        type='select'
         name="state" onChange={handlestate}  value={state}
        >
        <option>-Select State-</option>
        <option value={1}>Telangana</option>
        <option value={2}>Andhrapradesh</option>
        <option value={3}>Other</option>

        </Input>
       
      
      </FormGroup>
    </Col>

  </Row>


  <Row>
    
    <Col md={4}>
      <FormGroup>
        <Label for="examplePassword">
        DISTRICT
        </Label>
        <Input
        id="exampleSelect"
        type="select"
        name="district" onChange={handledistrict}  value={district}
      >
        <option>-Select Dist-</option>
        <option value={1}>Hyderabad</option>
        <option value={2}>Guntur</option>
        <option value={3}>Karimnagar</option>
       
      </Input>
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="examplePassword">
        AREA
        </Label>
        <Input
        type='select'
        name="area" onChange={handlearea}  value={area}
        >
        <option>-Select Area-</option>
        <option value={1}>Madhapur</option>
        <option value={2}>Hitech city</option>
        <option value={3}>Jubliee Hills</option>

        </Input>
       
      
      </FormGroup>
    </Col>

    <Col md={4}>
        <Label></Label>
    <Button
    block
    color="success"
    size="lg"
    onClick={handlesubmit}  type="submit"
  >
    SUBMIT
  </Button>
    </Col>

  </Row>
	



	

	  
		{/* <button onClick={handlesubmit} className="btn" type="submit">
		Submit
		</button> */}

        
	</form>
	</div>
)

};