import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pfp from '../images/pfp.JPG'
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return (
        <section id="home" className="py-5" style={{ display: 'flex' }}>
            <Container className="intro d-flex justify-content-center">
                <Row className="align-items-center justify-content-center">
                    <Col md={1}></Col>
                    <Col md={4} className="d-flex justify-content-center">
                        <Image id="pfp" src={pfp} roundedCircle fluid alt="Amanda's profile picture" style={{ width: '300px', height: '350px', objectFit: 'cover' }}/>
                    </Col>
                    <Col md={6}>
                        <h1>I'm Amanda, nice to meet you :)</h1>
                        <br></br>
                        <p>I am pursuing degrees in Computer Science, Human Resource Management, and Mathematics at Rutgers University-New Brunswick. This website is developed using React and React Bootstrap. Check out the previous version (designed with HTML and CSS) at <a href="https://amanda-lei.github.io/MyWebsite/index.html" target="_blank" rel="noreferrer">MyWebsite</a>.</p>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;