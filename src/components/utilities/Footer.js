import React from 'react';
import {
  Container,
  BP,
} from 'bootstrap-4-react';



const Footer = props => (
  <div style={{marginTop:"100px"}}>
    <Container as="footer">
      <BP float="right"><a href="#">Back to top</a></BP>
      <p>&copy; 2020 Copyright Sparity.com&middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </Container>
    </div>
  )
  

  export default Footer