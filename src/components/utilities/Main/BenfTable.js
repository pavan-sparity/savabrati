import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormGroup, Label, Input,Col,
    Button, Form} from 'reactstrap';

export default function Form1() {
  let navigate = useNavigate();
  // States for registration

  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [bloodtype, setbloodtype] = useState("2");
  const [bloodgroup, setbloodgroup] = useState("2");
  const [units, setunits] = useState("");
  const [accepted, setaccepted] = useState("");
  const [deadline, setdeadline] = useState("");
  const [mobile1, setmobile1] = useState("");
  const [mobile2, setmobile2] = useState("");
  const [hname, sethname] = useState("");
  const [haddress, sethaddress] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [district, setdistrict] = useState("");
  const [area, setarea] = useState("");
  const [pincode, setpincode] = useState("");

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

  const handlebloodtype = (e) => {
    setbloodtype(e.target.value);
    setSubmitted(false);
  };

  const handlebloodgroup = (e) => {
    setbloodgroup(e.target.value);
    setSubmitted(false);
  };

  const handleunits = (e) => {
    setunits(e.target.value);
    setSubmitted(false);
  };

  const handleaccepted = (e) => {
    setaccepted(e.target.value);
    setSubmitted(false);
  };

  const handledeadline = (e) => {
    setdeadline(e.target.value);
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

  const handlehname = (e) => {
    sethname(e.target.value);
    setSubmitted(false);
  };

  const handlehaddress = (e) => {
    sethaddress(e.target.value);
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

  // Handling the form submission

  const handlesubmit = (e) => {
    const data = {
      benf_fullname: name,
      benf_age: age,
      benf_gender: gender,
      benf_blood_type: bloodtype,
      benf_bloodgroup: bloodgroup,
      benf_units_required: units,
      benf_acc_bloodgroup: accepted,
      benf_deadline: deadline,
      benf_mobile1: mobile1,
      benf_mobile2: mobile2,
      benf_hospital_name: hname,
      benf_hospital_address: haddress,
      benf_country: country,
      benf_state: state,
      benf_district: district,
      benf_area: area,
      benf_pincode: pincode,
    };
    axios
      .post("http://localhost:4000/benfsignup",data)
      .then(function (response) 
      {
        if(response.data.status=='success')
        {
            alert("Your Successfully Register You get Call Soon.. ");
            axios.get("http://localhost:4000/data");
            navigate('/Userlogin');
        }
        else{
            alert('error');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    } 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      // console.log(data);
        // console.log(response);
//         e.preventDefault();
//         if (
//           name === "" ||
//           age === "" ||
//           gender === "" ||
//           bloodtype === "" ||
//           bloodgroup === "" ||
//           units === "" ||
//           accepted === "" ||
//           deadline === "" ||
//           mobile1 === "" ||
//           mobile2 === "" ||
//           hname === "" ||
//           haddress === "" ||
//           country === "" ||
//           state === "" ||
//           district === "" ||
//           area === "" ||
//           pincode === ""
//         )
//         {
//           setError(true);
          
//         } else {
//           setSubmitted(true);
//           setError(false);
//         }
       
//   };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
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
          display: error  ? "" : "none",
        }}
      >
        <h1 style={{color:"red"}}>Please fill all the fields</h1>
      </div>
    );
  };



// 
// Here to start html code...
// 



  return (
    <div className="form" style={{ marginTop: "80px", textAlign: "center" ,backgroundColor:"#f1f1f1" }}>
      <div>
        <h1>Blood Request Form</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <div>
          <h4>Personal Information</h4>
        </div>
      {/* <form style={{marginLeft:"400px", border: "2px solid #f9f9f9", padding:"50px 0px 20px 180px", marginRight:"300px",backgroundColor:"#f9f9f9",borderShadow:"0px 5px 10px 0px"}}> */}
       <form>
                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                    <Col sm={4}>
                        <Label for="nameField">NAME:</Label>
                        <Input type="text" name="name" id="nameField"
                            placeholder="Enter your Full Name" onChange={handlename} value={name} />{" "}
                    </Col>
                    <Col sm={4}>
                        <Label for="ageField">AGE:</Label>
                        <Input type="text" onChange={handleage} className="input" value={age}
                        id="ageField"
                        placeholder="Enter your Age" />
                    </Col>

                    <Col sm={4}>
                    <Label for="exampleSelect">GENDER:</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={handlegender} value={gender}>
                    <option>--Select Gender--</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>Other</option>
            
                    </Input>
                    </Col>
                    
                </FormGroup>
                {/* first row */}



                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                    
                    <Col sm={4}>
                        <Label for="mobileField">MOBILE NUMBER:</Label>
                        <Input type="number" placeholder="Enter your Mobile number"
                            name="mobile1"
                            onChange={handlemobile1}
                            value={mobile1} className="input"
                            id="mobileField"
                         />
                    </Col>

                    <Col sm={4}>
                    <Label for="exampleSelect">ALTERNATE MOBILE NUMBER:</Label>
                    <Input type="number" id="exampleSelect" placeholder="Enter your other number"
                     name="mobile2"
                    onChange={handlemobile2}
                     value={mobile2} />
                     
                    </Col>

                    <Col sm={4}>
                    <Label for="exampleSelect">BLOOD TYPE:</Label>
                    <Input type="select" name="bloodtype" id="exampleSelect"  onChange={handlebloodtype} value={bloodtype}>
                            <option>--Select Blood Type--</option>
                            <option value={1}>Platelets</option>
                            <option value={2}>plasma</option>
                    </Input>
                    </Col>

                </FormGroup>

                {/* second row */}

                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                <Col sm={4}>
                    <Label for="exampleSelect">BLOOD GROUP:</Label>
                    <Input type="select" name="bloodgroup" id="exampleSelect"  onChange={handlebloodgroup} value={bloodgroup}>
                        <option>--Select Blood Group--</option>
                        <option value={1}>A+</option>
                        <option value={2}>A-</option>
                        <option value={3}>B+</option>
                        <option value={4}>B-</option>
                        <option value={5}>AB+</option>
                        <option value={6}>AB-</option>
                        <option value={7}>O+</option>
                        <option value={8}>O-</option>
                    </Input>
                    </Col>

                    <Col sm={4}>
                    <Label for="exampleSelect">NO. OF UNITS REQ:</Label>
                    <Input type="text"
                     ClassName="input" 
                     placeholder="How much blood do you have?"
                     id="exampleSelect" 
                     onChange={handleunits}
                     value={units}>
                            
                    </Input>
                    </Col>

                    <Col sm={4}>
                    <Label for="exampleSelect">ACCEPTED BLOOD GROUP:</Label>
                    <Input type="select" name="accepted" id="exampleSelect"  onChange={handleaccepted} value={accepted}>
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
                    </Col>



                    
                    
                </FormGroup>

                {/* Third Row */}

                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                   
                <Col sm={4}>
                    <Label for="exampleSelect">DEADLINE:</Label>
                    <Input type="text"
                     ClassName="input" 
                     placeholder="Enter Deadline"
                     name="deadline"
                     onChange={handledeadline}
                     value={deadline}>
                            
                    </Input>
                    </Col>

                    <Col sm={4}>
                    <Label for="exampleSelect">HOSPITAL NAME:</Label>
                    <Input type="text"
                     ClassName="input" 
                     placeholder="Enter Your Full Address"
                     name="address"
                     onChange={handlehname}
                     value={hname}>
                            
                    </Input>
                    </Col>

                    <Col sm={4}>
                    <Label for="exampleSelect">HOSPITAL ADDRESS:</Label>
                    <Input type="text"
                     ClassName="input" 
                     placeholder="Enter Your Full Address"
                     name="address"
                     onChange={handlehaddress}
                     value={haddress}>
                            
                    </Input>
                    </Col>
                    
                    
                </FormGroup>

                {/* Fourth row */}

                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                <Col sm={4}>
                    <Label for="exampleSelect">PINCODE:</Label>
                    <Input type="number"
                     ClassName="input" 
                     placeholder="Enter your Pincode"
                     name="pincode"
                     onChange={handlepincode}
                     value={pincode}>
                            
                    </Input>
                    </Col>

                    <Col sm={4}>
                    <Label for="exampleSelect">COUNTRY:</Label>
                    <Input type="select" name="country" onChange={handlecountry} value={country}>
                    <option>-Select Country-</option>
                    <option value={1}>India</option>
                    <option value={2}>USA</option>
                    <option value={3}>UK</option>
                    </Input>
                    </Col>

                    <Col sm={4}>
                    <Label for="exampleSelect">STATE:</Label>
                    <Input type="select" name="state" onChange={handlestate} value={state}>
                    <option>-Select State-</option>
                    <option value={1}>Telangana</option>
                    <option value={2}>Andhrapradesh</option>
                    <option value={3}>Other</option>
                    </Input>
                    </Col> 
                   
                    
                </FormGroup>

                {/* Fifth row */}

                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">

                    

                    <Col sm={4}>
                    <Label for="exampleSelect">DISTRICT:</Label>
                    <Input type="select" name="district" onChange={handledistrict} value={district}>
                    <option>-Select District-</option>
                    <option value={1}>Hyderabad</option>
                    <option value={2}>Guntur</option>
                    <option value={3}>Karimnagar</option>
                    </Input>
                    </Col>

                    <Col sm={4}>
                    <Label for="exampleSelect">AREA:</Label>
                    <Input type="select" name="area" onChange={handlearea} value={area}>
                    <option>-Select Area-</option>
                    <option value={1}>Madhapur</option>
                    <option value={2}>Hitech city</option>
                    <option value={3}>Jubliee Hills</option>
                    </Input>
                    </Col> 

                    <Col sm={4}>
                    <Label for="exampleSelect"></Label>
                    <Button onClick={handlesubmit} 
                    color="secondary" size="lg" block>Submit</Button>
                    </Col>
                    
                </FormGroup>

        
        
      </form>
    </div>
  );
}

