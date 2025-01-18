import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import ReactMarkdown from 'react-markdown';

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
    description: "As a Pharmacovigilance Summer Intern at Pfizer, I developed applications tailored to the needs of global teams. I streamlined resource management by **automating over 150 emails, saving 80+ hours** of administrative work. I also designed and developed a **Python**-based application using **Streamlit** and **Google DLP** services to automate the redaction of personally identifiable information, significantly improving operational efficiency.",
    images: images.pfizer,
  },
  {
    title: 'Marketing Director @ HackRU',
    date: 'July 2024 - Present',
    description: "HackRU is Rutgers University's **largest biannual hackathon**. By strategically planning and analyzing content performance, I **boosted engagement by ~50% in a single semester**! Additionally, I support hackers during events by troubleshooting coding challenges across various programming languages. We hope to give a seamless and rewarding experience for **over 500 participants**. [Visit website](https://www.hackru.org/)",
    images: images.hackru,
  },
  {
    title: 'Learning Assistant @ Rutgers University',
    date: 'July 2023 - Present',
    description: "I am currently in my fourth semester as a Learning Assistant for Rutgers University's **Introduction to Computer Science** class. In this role, I **lead recitation sessions**, teaching essential topics such as algorithmic thinking, searching/sorting algorithms, recursion, and **Java programming**. Leveraging pedagogical best practices, I develop adaptable lesson plans and materials to support students in building strong foundational programming skills.",
    images: images.rutgers,
  },
];

const hobbies = [
  {
    title: 'Art',
    images: images.art,
    description: "Art has always been a relaxing and enjoyable creative outlet for me. I’m most comfortable with pencil and paper, and have recently started experimenting with digital art. The first image shows my very own Spidersona, inspired by the Spider-Verse movies and the idea that anyone can wear the mask. My Spidersona reflects my love for pandas (inspired by my sister's nickname for me) and my favorite colors, red and black.",
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
  // clothing, tennis, fencing, traveling
  // tennis: https://medium.com/@nacomm/the-making-of-champions-356b6fa53054
];

// import history images
export const importAll = (requireContext) => {
  let images = {};
  requireContext.keys().forEach((item) => {
    images[item.replace('./', '')] = requireContext(item);
  });
  return images;
};

const history = [
  {
    title: 'Where It All Began',
    description: "I’ve been passionate about computer science since 4th grade, when I first discovered robotics. Making a machine come to life sparked a love for technology that’s only grown stronger ever since.",
    image: require('../images/history/early.jpeg'),
  },
  {
    title: 'Award Winning Team',
    description: "My team competed regionally and globally, earning numerous awards along the way. This picture is from when we won the Design Award at the VEX IQ New Jersey State Competition! [Read about it here](https://www.newjerseyhills.com/echoes-sentinel/news/long-hill-community-comes-together-for-robotics-tournament/article_ae11548b-d52e-5d9f-926c-20aa5e2e614f.html)",
    image: require('../images/history/design.jpg'),
  },
  {
    title: 'World Champions',
    description: "That's me on the big screen in front of the whole world! Representing New Jersey, my team traveled to Louisville, KY for the 2017 VEX IQ World Competition. [Read about it here](https://www.newjerseyhills.com/echoes-sentinel/news/long-hill-celebrates-world-beating-robotics-team-video/article_6dd4786f-175e-55df-8f3b-ce8e05d05f80.html) or [here](https://www.newjerseyhills.com/echoes-sentinel/news/long-hill-brings-home-four-awards-from-world-s-largest-robotics-competition/article_c8632d03-9085-5a9b-a984-ea484f31780a.html)",
    image: require('../images/history/worlds.jpeg'),
  },
  {
    title: 'Passing It On',
    description: "In highschool, I was CMO of Techshare Project, a nonprofit working to introduce underprivileged kids to technology. Here's me volunteering at the Boys and Girls Club of Newark! [Learn more here](https://www.techshareproject.org/)",
    image: require('../images/history/newark.JPG'),
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
      <Container fluid id='experience' className="expPage py-5 px-0">
        
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
                <ReactMarkdown className="mt-3">{exp.description}</ReactMarkdown>
              </Col>
            </Row>
          ))}
        </div>

        {/* History Section */}
        <div className="history">
          <Carousel fade interval={null}>
            {history.map((exp, index) => (
              <Carousel.Item key={index}>
                <div className="historyCarouselItem" style={{ backgroundImage: `url(${exp.image})` }}>
                  <Carousel.Caption className="historyCaption" style={{ color: 'white' }}>
                    <h2>{exp.title}</h2>
                    <ReactMarkdown>{exp.description}</ReactMarkdown>
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
            <ReactMarkdown>{currentExperience.description}</ReactMarkdown>
            <ReactMarkdown className='expQuestion'>{currentExperience.question}</ReactMarkdown>
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
