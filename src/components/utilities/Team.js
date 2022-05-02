import React from 'react';
import  {BDiv,
  
  Row,
  Col,
 
  BImg
} from 'bootstrap-4-react';

import sample from '../assets/Img/sample.png';
import heart from '../assets/Img/heart.jpg';
import donation from '../assets/Img/donation.png';
import doctor from '../assets/Img/doctor.png';
import '../../App.css';

const style = {
marketing: {
    color: '#5a5a5a',
    item: {
      marginBottom: '1.5rem',
      textAlign: 'center',
      marginTop:"10rem"
    }
  },
}

const Marketing = props => (
    <Row>
    {/* <Col col="lg-1"></Col> */}
<Col col="lg-3" style={style.marketing.item}>
<BDiv class="flex-container">
   <BDiv class="flip-card">
   <BDiv class="flip-card-inner">
     <BDiv class="flip-card-front">
     <BImg src={heart} alt="Avatar" width="250px" height="300px"/>
     </BDiv>
     <BDiv class="flip-card-back">
       <h1>Happy Ever</h1>
       <p>Smile & Good</p>
       <p>We love so much!</p>
     </BDiv>
   </BDiv>
 </BDiv>
 </BDiv>
</Col>
      <Col col="lg-3" style={style.marketing.item}>
 <BDiv class="flip-card">
   <BDiv class="flip-card-inner">
     <BDiv class="flip-card-front">
     <BImg src={donation} alt="Avatar" width="250px" height="300px"/>
   </BDiv>
   <BDiv class="flip-card-back">
     <h1>Donating Blood</h1>
     <p>Help & Encourage</p>
     <p>We love that guy</p>
   </BDiv>
 </BDiv>
 </BDiv>
</Col>
      <Col col="lg-3" style={style.marketing.item}>
 <BDiv class="flip-card">
     <BDiv class="flip-card-inner">
     <BDiv class="flip-card-front">
     <BImg src={sample} alt="Avatar" width="250px" height="300px"/>
     </BDiv>
     <BDiv class="flip-card-back">
       <h1>John Doe</h1>
       <p>Architect & Engineer</p>
       <p>We love that guy</p>
     </BDiv>
   </BDiv>
 </BDiv>
 </Col>
 <Col col="lg-3" style={style.marketing.item}>
 <BDiv class="flip-card">
     <BDiv class="flip-card-inner">
     <BDiv class="flip-card-front">
     <BImg src={doctor} alt="Avatar" width="250px" height="300px"/>
     </BDiv>
     <BDiv class="flip-card-back">
       <h1>John Doe</h1>
       <p>Architect & Engineer</p>
       <p>We love that guy</p>
     </BDiv>
   </BDiv>
 </BDiv>
 </Col>
</Row>
)
  export default Marketing