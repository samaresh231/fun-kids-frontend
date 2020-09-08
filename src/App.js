import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import ImageSection from './ImageSection';
import WebCam from './WebCam'
import Text from './Text';
import NavbarContent from './Navbar.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <NavbarContent />
      <Container>
        <Row>
          <Col sm="12" lg="7"><WebCam /></Col>
          <Col sm="12" lg="5"><ImageSection /></Col>
        </Row>
        <Row>
          <Col><Text /></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
