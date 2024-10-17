import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import resumePDF from '../images/Lei_Amanda_Resume.pdf'

function Resume() {
  return (
    <Container className="text-center my-5">
        <h2 className="mb-4" style={{ color: 'white' }}>My Resume</h2>

        <iframe src={resumePDF} width="100%" height="600px" style={{ border: '2px solid #ffffff', borderRadius: '8px' }} title="Resume"> Your browser doesn't support iframes. </iframe>

        <div className="my-4">
            <Button variant="primary" href={resumePDF} download="Lei_Amanda_Resume.pdf"> Download Resume </Button>
        </div>
    </Container>
  );
}

export default Resume;
