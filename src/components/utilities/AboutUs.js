import React, { Component } from 'react';
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
import sparityLogo from '../assets/Img/sparity.png';
import doctor from '../assets/Img/doctor.png';
import heart from '../assets/Img/heart.jpg';
import seva from '../assets/Img/seva_bharathi.jpg';
import donation from '../assets/Img/donation.png';
import '../../App.css'

const style = {
    featurette: {
        divider: {
          margin: '76px 0 0 0'
        },
        image: {
          width: '400px',
          height: '400px',
          margin: '70px 0 0 80px'
        },
        image2: {
          width: '600px',
          height: '400px',
          margin: '70px 0 0 80px',
          marginLeft: '120px',
          overflow:'hidden'
        }
    }
}


const Featurette = props => (
    <React.Fragment>
      <hr style={style.featurette.divider} />
      <Row>
      <Col col="md-1"></Col>
        <Col col="md-6" style={{marginTop:'2rem'}}>
        
          <h2>WHO WE ARE?</h2>
          <h4><BSpan text="muted">It will blow your mind.</BSpan></h4>
          <Lead>
          Seva Bharathi is a platform that wants to bring together those who have a heart for interventions and those who have an interest in contributing towards causes. The platform doesn’t just aim at being a point of connection, but delivers some actual value as well.
          </Lead><Lead>
  By showing some kind of transparency as well as consistency, the organization assures you that your money is going to be put to use where it’s needed – something that can’t really be ensured with other large organizations – even if their motives might be honest.
          </Lead>
          <Lead>
          A voluntary driven not-for-profit serving since 1989 with moderate means and canvas of activities, it has since grown into an expansive network in Education, Health, Empowerment and Disaster Management. As of March 2021, total beneficiaries stands at 9,53,358 and there are around 874 relief centers discharging 2400+ diversified activities in all of 33 districts of the state.
          </Lead>
        </Col>
        <Col col="md-5">
          <BImg fluid src={seva} mx="40px" style={style.featurette.image} />
        </Col>
      </Row>
      <hr style={style.featurette.divider} />
      <Row>
      <Col col="md-7" >
          <BImg fluid src={donation} mx="" style={style.featurette.image2} />
        </Col>
        <Col col="md-5">
          <div style={{marginTop:"150px"}}>
          <h1>Donation Process</h1>
          <Lead>1. Register as a donor with us
           </Lead>
           <Lead>2. You will be contacted when blood is needed
           </Lead>
           <Lead>3. Respond to our calls
           </Lead>
           <Lead>4. Give the blood at the mentioned Hospital
           </Lead>
           </div>
        </Col>
        
      </Row>
      <hr style={style.featurette.divider} />
      <Row >
          <Col bg="light" col="md-1"></Col>
        <Col bg="light" class="contact" col="md-3">
          <div style={{marginTop:"50px", paddingLeft:"40px"}}>
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
          </div>
  
        </Col>
        <Col bg="light" col="md-3"></Col>
        <Col col="md-5">
        <div style={{marginTop:"20px", padding:"40px"}}>
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
          </div>
        </Col>
      </Row>
      <hr style={style.featurette.divider} />
    </React.Fragment>
  )
  
  export default Featurette