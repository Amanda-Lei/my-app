import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

// dynamic image import
const pfizerImages = require.context('../images/pfizer', true);

const images = {
  pfizer: pfizerImages.keys().map((image) => pfizerImages(image)),
};

const primaryExperiences = [
  {
    title: 'Pharmacovigilance Intern @ Pfizer',
    date: 'June 2024 - August 2024',
    description: 'Designed and built a Python-based application...',
    images: images.pfizer,
  },
  {
    title: 'Learning Assistant @ Rutgers University',
    date: 'January 2023 - Present',
    description: 'Facilitated workshops and supported student learning...',
    images: images.pfizer,
  },
  {
    title: 'Marketing Director @ HackRU',
    date: 'September 2022 - Present',
    description: 'Managed social media campaigns and increased engagement...',
    images: images.pfizer,
  },
];

const secondaryExperiences = [
  {
    title: 'Creative Outlet',
    description: "I enjoy drawing occasionally, here are some pieces that I am the most proud of...",
    images: images.pfizer,
  },
  {
    title: 'Creative Outlet',
    description: "I enjoy drawing occasionally, here are some pieces that I am the most proud of...",
    images: images.pfizer,
  },
];

function Experience() {
  const [showModal, setShowModal] = React.useState(false);
  const [currentExperience, setCurrentExperience] = React.useState(null);

  const handleShow = (exp) => {
    setCurrentExperience(exp);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <section>
      <Container fluid id="experience" className="py-5">
        <h2 className="text-center mb-5">My Experiences</h2>
        
        {/* Primary Experiences */}
        {primaryExperiences.map((exp, index) => (
          <Row key={index} className="align-items-center mb-5 p-2">
            <Col className='colImgBorder' md={6} style={{ order: index % 2 === 0 ? 1 : 2 }}>
              <Carousel>
                {exp.images.map((img, idx) => (
                  <Carousel.Item key={idx}>
                    <img src={img} alt={`${exp.title} ${idx + 1}`} className="d-block w-100" style={{ height: '300px', objectFit: 'cover', borderRadius: '8px' }}/>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={6} style={{ order: index % 2 === 0 ? 2 : 1 }}>
              <h3 className='primHeader'>{exp.title}</h3>
              <small>{exp.date}</small>
              <p className="mt-3">{exp.description}</p>
            </Col>
          </Row>
        ))}

        {/* Secondary Experiences */}
        <div className="secExp bg-dark mt-5" style={{ padding: '20px', borderRadius: '8px' }}>
          <h3 id="secHeader" className="text-center mb-4">Other Experiences</h3>
          <Row>
            {secondaryExperiences.map((exp, index) => (
              <Col key={index} md={4} className="colImgBorder mb-4">
                <Carousel>
                  {exp.images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <img src={img} alt={`${exp.title} ${idx + 1}`} className="d-block w-100" style={{ height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Button
                  variant="dark"
                  className="mt-2 w-100"
                  onClick={() => handleShow(exp)}
                  style={{ background: '#002650' }}
                >
                  Learn More
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      {/* Modal */}
      {currentExperience && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{currentExperience.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{currentExperience.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
}

export default Experience;
