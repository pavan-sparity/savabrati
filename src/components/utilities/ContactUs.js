import React from 'react';
import Bootstrap, {
    Navbar, BDiv,
    Nav,
    Form,
    Carousel,
    Button,
    Lead,
    Container,
    Row,
    Col,
    BP,
    BSpan,
    BImg
  } from 'bootstrap-4-react';
  import { Link } from 'react-router-dom';
import { FormGroup } from 'reactstrap';
import Footer from './Footer';
  const style = {
    featurette: {
        divider: {
          margin: '0 0 0 0'
        },
        image: {
          width: '500px',
          height: '500px'
        },
        image2: {
            width: '700px',
          height: '500px'
        }
    }
}

const ContactUs = () => {
  return (
    <div className='contact_detail' style={{marginTop:"100px"}}>


<React.Fragment>
    <FormGroup>
<Row>
          <Col bg="light" col="md-1"></Col>
        <Col bg="light" class="contact" col="md-3">
        <h1>Contact Us</h1>
          <h2>Address</h2>
          <Lead>
            Q-hub Building,
          </Lead>
          <Lead>
          Madhapur, Hyderabad, Telangana,
          </Lead>
          <Lead>
          Telangana - 500081
          </Lead>
  
          <h2>Call Us</h2>
          <Lead>
            040 - 1234567
          </Lead>
  
          <h2>Mail Us</h2>
          <Lead>
            contact@sparity.org
          </Lead>
  
        </Col>
        <Col bg="light" col="md-3"></Col>
        <Col col="md-5">
          <Form >
          <h2>Get Help!</h2>
          <BDiv mb="4" py="2">
          <Form.Input mr="sm-10" type="text"placeholder="Name"/>
          </BDiv><BDiv mb="4" py="2" >
          <Form.Input mr="sm-2" type="text"placeholder="Mobile No"aria-label="Search"/>
          </BDiv><BDiv mb="4" py="2">
          <Form.Input mr="sm-2" type="text"placeholder="Email Address"aria-label="Search"/>
          </BDiv><BDiv mb="4" py="2">
          <Form.Input mr="sm-2" type="text"placeholder="Message"aria-label="Search"/>
          </BDiv>
          <Button primary my="2 sm-0" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
      <hr style={style.featurette.divider} />
      </FormGroup>
    </React.Fragment>


    <Footer/>
    </div>
  )
}

export default ContactUs

