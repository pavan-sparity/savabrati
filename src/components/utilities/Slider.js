import React, { Component } from 'react';
import {
  Carousel,
  Button,
  Container,
} from 'bootstrap-4-react';
import doctor from '../assets/Img/doctor.png';
import heart from '../assets/Img/heart.jpg';
import sample from '../assets/Img/sample.png';
import '../../App.css'
import { useNavigate } from "react-router";

const style = {
    carousel: {
        
      marginBottom: '0',
      marginTop:'80px',
    
      slide: {
        image: {
          minWidth: '100%',
          height: '38rem'
        },
        caption: {
          marginBottom: '3rem'
        },
        p: {
          fontSize: '1.25rem',
          marginBottom: '1.25rem'
        }
      },
      
    },
}






const MyCarousel = props => {

  var navigate1 = useNavigate(); 
  const donate=()=>{
    navigate1('/Mobile_veri');
  }
  
  const receive=()=>{
    navigate1('/Mobile_veri1');
  }


return(
  
    <Carousel id="myCarousel" style={style.carousel}>
      <Carousel.Indicators>
        <Carousel.Indicator target="#myCarousel" to="0" active />
        <Carousel.Indicator target="#myCarousel" to="1" />
        <Carousel.Indicator target="#myCarousel" to="2" />
      </Carousel.Indicators>
      <Carousel.Inner>
        <Carousel.Item active>
          <img src={doctor} style={style.carousel.slide.image} />
          <Container>
            <Carousel.Caption text="left" style={style.carousel.slide.caption}>
              <h3>Donate blood, save life!</h3>
              <h1>DONATE BLOOD</h1>
              <h1>AND INSPIRES OTHERS</h1>
              <Button style={{marginRight: '2rem'}} primary lg onClick={donate}>Donate Now</Button>
              <Button primary lg onClick={receive}>Receive Now</Button>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img src={heart}  style={style.carousel.slide.image} />
          <Container>
            <Carousel.Caption text="left" style={style.carousel.slide.caption}>
            <h3>Donate blood, save life!</h3>
              <h1>DONATE BLOOD</h1>
              <h1>AND INSPIRES OTHERS</h1>
              <Button style={{marginRight: '2rem'}} class="p-1" primary lg onClick={donate}>Donate Now</Button>
              <Button class="p-1" primary lg onClick={receive}>Receive Now</Button>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img src={sample} style={style.carousel.slide.image} />
          <Container>
            <Carousel.Caption text="left" style={style.carousel.slide.caption}>
            <h3>Donate blood, save life!</h3>
              <h1>DONATE BLOOD</h1>
              <h1>AND INSPIRES OTHERS</h1>
              <Button style={{marginRight: '2rem'}} primary lg onClick={donate}>Donate Now</Button>
              <Button  primary lg onClick={receive}>Receive Now</Button>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
      </Carousel.Inner>
      <Carousel.Prev href="#myCarousel">
        <Carousel.Prev.Icon />
      </Carousel.Prev>
      <Carousel.Next href="#myCarousel">
        <Carousel.Next.Icon />
      </Carousel.Next>
    </Carousel>
  )
}
  
export default MyCarousel