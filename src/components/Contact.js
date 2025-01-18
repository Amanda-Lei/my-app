import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons'; // Icons for GitHub, LinkedIn, Email
import 'bootstrap/dist/css/bootstrap.css';

function Contact() {
  return (
    <section id="contact">
      <Container className="text-center">
        <h2 className="mb-4">Contact Me</h2>
        <Row className="justify-content-center">

          {/* GitHub */}
          <Col md={4} className="mb-4">
            <Card className="shadow-sm" style={{ borderRadius: '20px', backgroundColor: '#ffffff' }}>
              <Card.Body>
                <Github size={40} style={{ marginBottom: '15px' }} />
                <Card.Title>GitHub</Card.Title>
                <Card.Text>Explore my projects and code</Card.Text>
                <Button variant="dark" href="https://github.com/Amanda-Lei" target="_blank" rel="noopener noreferrer">
                  Visit GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* LinkedIn */}
          <Col md={4} className="mb-4">
            <Card className="shadow-sm" style={{ borderRadius: '20px', backgroundColor: '#ffffff' }}>
              <Card.Body>
                <Linkedin size={40} style={{ color: '#0072b1', marginBottom: '15px' }} />
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text>Connect with me on LinkedIn</Card.Text>
                <Button variant="dark" href="https://www.linkedin.com/in/amanda-lei168/" target="_blank" rel="noopener noreferrer">
                  Visit LinkedIn
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Email */}
          <Col md={4} className="mb-4">
            <Card className="shadow-sm" style={{ borderRadius: '20px', backgroundColor: '#ffffff' }}>
              <Card.Body>
                <Envelope size={40} style={{ color: '#d44638', marginBottom: '15px' }} />
                <Card.Title>Email</Card.Title>
                <Card.Text>Message amandaylei@gmail.com</Card.Text>
                <Button variant='dark'
                  onClick={() => {
                    window.location.href = `mailto:amandaylei@gmail.com`;
                  }}
                >Send Email</Button>
                {/* <Button variant="dark" href="amandaylei@gmail.com">
                  Send Email
                </Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
