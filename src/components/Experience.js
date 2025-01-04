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
const rutgersImages = require.context('../images/rutgers', true);
const hackruImages = require.context('../images/hackru', true);
const artImages = require.context('../images/art', true);
const gameImages = require.context('../images/game', true);
const musicImages = require.context('../images/music', true);

const images = {
  pfizer: pfizerImages.keys().map((image) => pfizerImages(image)),
  rutgers: rutgersImages.keys().map((image) => rutgersImages(image)),
  hackru: hackruImages.keys().map((image) => hackruImages(image)),
  art: artImages.keys().map((image) => artImages(image)),
  game: gameImages.keys().map((image) => gameImages(image)),
  music: musicImages.keys().map((image) => musicImages(image)),
};

const primaryExperiences = [
  {
    title: 'Pharmacovigilance Intern @ Pfizer',
    date: 'June 2024 - August 2024',
    description: "I developed an application to help teams improve their resource management, automating over 150 emails and saving more than 80 hours of administrative effort. My contributions extended to creating web portals and Power Automate flows for executive leadership, alongside producing instructional videos on how to maintain all of my creations. Collaborating with cross-functional global teams, I also designed and built a Python-based application using Streamlit and Google DLP services to automate the redaction of personally identifiable information, significantly enhancing operational efficiency. ",
    images: images.pfizer,
  },
  {
    title: 'Marketing Director @ HackRU',
    date: 'September 2022 - Present',
    description: "HackRU is Rutgers University's largest biannual hackathon. By strategically planning and analyzing content performance, I boosted engagement by approximately 50% in a single semester! Additionally, I support hackers during events by troubleshooting coding challenges across various programming languages. We hope to aim a seamless and rewarding experience for over 500 participants.",
    images: images.hackru,
  },
  {
    title: 'Learning Assistant @ Rutgers University',
    date: 'January 2023 - Present',
    description: "I am entering my fourth semester working as an LA. In this role, I lead recitation sessions for the Introduction to Computer Science class, teaching fundamental topics such as algorithmic thinking, searching/sorting algorithms, recursion, and Java programming. Drawing on pedagogical best practices, I create adaptable lesson plans and materials, ensuring students are supported in building their foundational programming skills.",
    images: images.rutgers,
  },
];

const secondaryExperiences = [
  {
    title: 'Creative Outlet',
    description: "I enjoy drawing occasionally, here are some pieces that I am the most proud of...",
    images: images.art,
  },
  {
    title: 'Creative Outlet',
    description: "I enjoy drawing occasionally, here are some pieces that I am the most proud of...",
    images: images.game,
  },
  {
    title: 'Creative Outlet',
    description: "I enjoy drawing occasionally, here are some pieces that I am the most proud of...",
    images: images.music,
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
                    <img src={img} alt={`${exp.title} ${idx + 1}`} className="d-block w-100" style={{ aspectRatio: '3/2', objectFit: 'cover', borderRadius: '8px' }}/>
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

        {/* Secondary Experiences
        <div className="secExp bg-dark mt-5" style={{ padding: '20px', borderRadius: '8px' }}>
          <h3 id="secHeader" className="text-center mb-4">My Hobbies</h3>
          <Row>
            {secondaryExperiences.map((exp, index) => (
              <Col key={index} md={4} className="colImgBorder mb-4">
                <Carousel>
                  {exp.images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <img src={img} alt={`${exp.title} ${idx + 1}`} className="d-block w-100" style={{ aspectRatio: '4/5', objectFit: 'cover', borderRadius: '8px' }} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Button variant="dark" className="mt-2 w-100" onClick={() => handleShow(exp)} style={{ background: '#002650' }}>Learn More</Button>
              </Col>
            ))}
          </Row>
        </div> */}
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
