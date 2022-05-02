import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Col
  } from 'reactstrap';

const B_Request = () => {
//   const [stateNames, setStateNames] = useState([])
//   const onCountryChange = (e) => {
//     let country = e.target.value;

  // }
    return (
      <div className="App">
          <h2>Blood Request Form</h2>
          <Form className="form">
          <FormGroup row>
          <Label
                  for="exampleEmail"
                  sm={2}
          >
                   Full Name
          </Label>
      <Col sm={10}>
      <Input
          id="exampleEmail"
          name="text"
          placeholder="Enter Your Full Name"
          type="text"
        />
      </Col>
            </FormGroup>
  
            <FormGroup row>
          <Label
                  for="exampleEmail"
                  sm={2}
          >
                   Date of Birth
          </Label>
      <Col sm={10}>
      <Input
          id="exampleEmail"
          name="date"
          // placeholder="with a placeholder"
          type="date"
        />
      </Col>
            </FormGroup>
  
  
            <FormGroup row>
      <Label
        for="exampleSelect"
        sm={2}
      >
        Gender
      </Label>
      <Col sm={10}>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
        >
          <option>
            --Select--
          </option>
          <option>
            Male
          </option>
          <option>
            Female
          </option>
          <option>
            Other
          </option>
          
        </Input>
      </Col>
    </FormGroup>
  
    <FormGroup row>
      <Label
        for="exampleSelect"
        sm={2}
      >
        Blood Group
      </Label>
      <Col sm={10}>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
        >
          <option>
            --Select--
          </option>
          <option>
            O+
          </option>
          <option>
            O-
          </option>
          <option>
            AB+
          </option>
          <option>
            AB-
          </option>
          <option>
            A+
          </option>
          <option>
            A-
          </option>
          <option>
            B+
          </option>
          <option>
            B-
          </option>
          <option>
            Other
          </option>
          
        </Input>
      </Col>
    </FormGroup>

    <FormGroup row>
      <Label
        for="exampleSelect"
        sm={2}
      >
        Accepted Blood Group
      </Label>
      <Col sm={10}>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
        >
          <option>
            --Select--
          </option>
          <option>
            O+
          </option>
          <option>
            O-
          </option>
          <option>
            AB+
          </option>
          <option>
            AB-
          </option>
          <option>
            A+
          </option>
          <option>
            A-
          </option>
          <option>
            B+
          </option>
          <option>
            B-
          </option>
          <option>
            Other
          </option>
          
        </Input>
      </Col>
    </FormGroup>
  
    <FormGroup row>
          <Label
                  for="exampleEmail"
                  sm={2}
          >
                   Hospital Name
          </Label>
      <Col sm={10}>
      <Input
          id="exampleEmail"
          name="mobile"
          placeholder="Enter Your Phone Number"
          type="text"
        />
      </Col>
            </FormGroup>
  
  
            
  
    <FormGroup row>
      <Label
        for="exampleText"
        sm={2}
      >
        Hospital Address
      </Label>
      <Col sm={10}>
        <Input
          id="exampleText"
          name="text"
          placeholder='Enter Hospital address'
          type="textarea"
        />
      </Col>
    </FormGroup>

    <FormGroup row>
      <Label
        for="exampleSelect"
        sm={2}
      >
        Blood Type
      </Label>
      <Col sm={10}>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
        >
          <option>
            --Select--
          </option>
          <option>
            Blood
          </option>
          <option>
            Platelets
          </option>
          
          
        </Input>
      </Col>
    </FormGroup>



  
    <FormGroup row>
      <Label
        for="exampleSelect"
        sm={2}
      >
        Country
      </Label>
      <Col sm={10}>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
          // onChange={onCountryChange}
        >
          <option>
            --Select--
          </option>
          <option>
            India
          </option>
          <option>
            UK
          </option>
          <option>
            USA
          </option>
         
          <option>
            Other
          </option>
          
        </Input>
      </Col>
    </FormGroup>
  
    <FormGroup row>
      <Label
        for="exampleSelect"
        sm={2}
      >
        State
      </Label>
      <Col sm={10}>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
        >
          {/* {setStateNames.map(value => {
            <li>{value}</li>
          })} */}
          <option>
            --Select--
          </option>
          <option>
            Andra Pradesh
          </option>
          <option>
            Telangana
          </option>
          <option>
            Odissa
          </option>
          
          <option>
            Other
          </option>
          
        </Input>
      </Col>
    </FormGroup>
  
    
  
    <FormGroup row>
      <Label
        for="exampleSelect"
        sm={2}
      >
        District
      </Label>
      <Col sm={10}>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
        >
          <option>
            --Select--
          </option>
          <option>
            1
          </option>
          <option>
            2
          </option>
          <option>
            3
          </option>
          <option>
            4
          </option>
          <option>
            5
          </option>
          <option>
            6
          </option>
          <option>
            7
          </option>
          <option>
            8
          </option>
          <option>
            Other
          </option>
          
        </Input>
      </Col>
    </FormGroup>
  
    
  
  
    <FormGroup row>
      <Label
        for="exampleSelect"
        sm={2}
      >
        Area
      </Label>
      <Col sm={10}>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
        >
          <option>
            --Select--
          </option>
          <option>
            A
          </option>
          <option>
            B
          </option>
          <option>
            C
          </option>
          <option>
            D
          </option>
          <option>
            E
          </option>
          <option>
            F
          </option>
          <option>
            G
          </option>
          <option>
            H
          </option>
          <option>
            Other
          </option>
          
        </Input>
      </Col>
    </FormGroup>
  
    
  
    <FormGroup row>
          <Label
                  for="exampleEmail"
                  sm={2}
          >
                   Pincode
          </Label>
      <Col sm={10}>
      <Input
          id="exampleEmail"
          name="pincode"
          placeholder="Enter Your Pincode"
          type="text"
        />
      </Col>
            </FormGroup>

            <FormGroup row>
          <Label
                  for="exampleEmail"
                  sm={2}
          >
                   Which Time to want blood?
          </Label>
      <Col sm={10}>
      <Input
          type="datetime-local"
          name="datetime"
        />
      </Col>
            </FormGroup>
  
            
  
  
  
            
            
  
          <Button color="success" block size="lg">Submit</Button>
          </Form>
  
      </div>
    )
  }

export default B_Request