import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

function Gallery() {
  const [show, setShow] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    { title: "Summer Intern & Part-Timer @ Pfizer", subtitle: "develop multiple apps to improve efficiency", imgCov: "", description: "" },
    { title: "CS Learning Assistant @ Rutgers", subtitle: "teach individually-led recitations", imgCov: "", description: "" },
    { title: "HackRU", subtitle: "marketing organizer for biannual hackathon", imgCov: "", description: "" },
    { title: "Techshare Project", subtitle: "student-led non-profit sharing technology", imgCov: "", description: "" },
    { title: "AJL Clothing", subtitle: "high-school entrepreunership endeavor", imgCov: "", description: "" },
    { title: "Robotics Competitor", subtitle: "competing on the international level", imgCov: "", description: "" },
  ];

  const handleShow = (project) => {
    setActiveProject(project);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: 'white' }}>Learn More About My Experiences!</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card style={{ cursor: 'pointer' }} onClick={() => handleShow(project)}>
              <Card.Img variant="top" src={project.imgCov} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.subtitle}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Project Details */}
      {activeProject && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{activeProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={activeProject.imgSrc} alt={activeProject.title} className="img-fluid mb-3" />
            <p>{activeProject.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Gallery;
