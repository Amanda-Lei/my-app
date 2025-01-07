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

const experiences = [
  {
    title: 'App Developer @ Pfizer',
    date: 'June 2024 - November 2024',
    description: "During my time as a Pharmacovigilance Summer Intern at Pfizer, I collaborated with Digital and Worldwide Medical teams to develop impactful applications. One of these applications streamlined resource management by automating over 150 emails and saving more than 80 hours of administrative effort. Additionally, I created web portals and Power Automate flows for executive leadership, producing instructional videos to ensure the seamless maintenance of my solutions. Working with cross-functional global teams, I also designed and developed a Python-based application using Streamlit and Google DLP services to automate the redaction of personally identifiable information, significantly improving operational efficiency.",
    images: images.pfizer,
  },
  {
    title: 'Marketing Director @ HackRU',
    date: 'July 2024 - Present',
    description: "HackRU is Rutgers University's largest biannual hackathon. By strategically planning and analyzing content performance, I boosted engagement by approximately 50% in a single semester! Additionally, I support hackers during events by troubleshooting coding challenges across various programming languages. We hope to give a seamless and rewarding experience for over 500 participants.",
    images: images.hackru,
  },
  {
    title: 'Learning Assistant @ Rutgers University',
    date: 'July 2023 - Present',
    description: "I am currently in my fourth semester as a Learning Assistant for Rutgers University's Introduction to Computer Science class. In this role, I lead recitation sessions, teaching essential topics such as algorithmic thinking, searching/sorting algorithms, recursion, and Java programming. Leveraging pedagogical best practices, I develop adaptable lesson plans and materials to support students in building strong foundational programming skills.",
    images: images.rutgers,
  },
];

const hobbies = [
  {
    title: 'Art',
    images: images.art,
    description: "Art has always been a relaxing and enjoyable creative outlet for me. I’m most comfortable with pencil and paper, though I’ve only recently started experimenting with digital art. The first image shows my very own Spidersona, inspired by the Spider-Verse movies and the idea that anyone can wear the mask. My Spidersona reflects my love for pandas (inspired by my sister's nickname for me) and my favorite colors, red and black.",
    question: "What would your Spidersona look like?",
    emailSubj: "My Spidersona Answer",
    emailDraft: "My spidersona would look like... ",
  },
  {
    title: 'Gaming',
    images: images.game,
    description: "Gaming started as a hobby, but my quick learning pushed my skills to a competitive level, leading me to temporarily join Rutgers’ Scarlet Knights Rose Valorant team. With them, I practiced teamwork, coordination, and maintaining composure under pressure. Currently ranked Ascendant (top 5% of players), I’ve learned that gaming isn’t just about winning—it’s about collaboration and developing a resilient mindset. While I play much less now, I still enjoy the camaraderie and strategic thinking that gaming offers.",
    question: "What is your favorite part of gaming?",
    emailSubj: "My Gaming Answer",
    emailDraft: "My favorite part of gaming is... ",
  },
  {
    title: 'Music',
    images: images.music,
    description: "Music is a constant presence in my life, setting the tone for whatever I’m doing—studying, cleaning, walking to class, or just relaxing. I love how music connects people, and I enjoy sharing that connection by attending concerts with friends. In 2024 alone, I attended eight concerts and festivals, seeing incredible artists like William Black, P1Harmony, Journey, Def Leppard, and DPR Ian. Each performance was unique and unforgettable.",
    question: "What was your most recent concert?",
    emailSubj: "My Concert Answer",
    emailDraft: "My most recent concert was... ",
  },
];

// utils/importImages.js
export const importAll = (requireContext) => {
  let images = {};
  requireContext.keys().forEach((item) => {
    images[item.replace('./', '')] = requireContext(item);
  });
  return images;
};

const history = [
  {
    title: 'Techshare Project',
    description: "I love teaching. In highschool, I was CMO of a non-profit organization that introduced underprivileged kids to technology. This picture is from one of our trips to the Boys and Girls Club of Newark!",
    image: require('../images/history/newark.JPG'),
  },
  {
    title: 'Robotics',
    description: "I’ve been passionate about computer science since 4th grade, when I was first introduced to robotics. My team competed at levels ranging from regional to global, earning numerous awards along the way. This picture is from when we won the Design Award at the VEX IQ New Jersey State Competition!",
    image: require('../images/history/design.jpg'),
  },
]

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
      <Container fluid className="expPage py-5 px-0">
        
        {/* Experiences */}
        <div class="experience">
          <h2 className="text-center mb-5">My Experiences</h2>
          {experiences.map((exp, index) => (
            <Row key={index} className="align-items-center mb-5 p-4">
              <Col className='colImgBorder' md={6} style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <Carousel>
                  {exp.images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <img src={img} alt={`${exp.title} ${idx + 1}`} className="d-block w-100" style={{ aspectRatio: '3/2', objectFit: 'cover', borderRadius: '8px' }}/>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col className='px-4' md={6} style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <h3 className='primHeader'>{exp.title}</h3>
                <small>{exp.date}</small>
                <p className="mt-3">{exp.description}</p>
              </Col>
            </Row>
          ))}
        </div>

        {/* History Section */}
        <div className="history">
          <Carousel data-bs-theme="dark">
            {history.map((exp, index) => (
              <Carousel.Item key={index}>
                <div className="historyCarouselItem" style={{ backgroundImage: `url(${exp.image})` }}>
                  <Carousel.Caption className="historyCaption" style={{ color: 'white' }}>
                    <h2>{exp.title}</h2>
                    <p>{exp.description}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Hobbies */}
        <div className="hobbies bg-dark">
          <h3 id="hobHeader" className="text-center mb-4">My Hobbies</h3>
          <Row>
            {hobbies.map((exp, index) => (
              <Col key={index} md={4} className="colImgBorder mb-4">
                <Carousel>
                  {exp.images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                      <img src={img} alt={`${exp.title} ${idx + 1}`} className="d-block w-100" style={{ aspectRatio: '1/1', objectFit: 'cover', borderRadius: '8px' }} />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Button variant="dark" className="mt-2 w-100" onClick={() => handleShow(exp)} >View Details</Button>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      {/* Modal */}
      {currentExperience && (
        <Modal show={showModal} onHide={handleClose} centered className='descripModal' size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>{currentExperience.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{currentExperience.description}</p>
            <p className='expQuestion'>{currentExperience.question}</p>
          </Modal.Body>
          <Modal.Footer>
          <Button
            onClick={() => {
              window.location.href = `mailto:amandaylei@gmail.com?subject=${currentExperience.emailSubj}&body=${currentExperience.emailDraft}`;
            }}
          >Let Me Know Your Answer!</Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
}

export default Experience;
