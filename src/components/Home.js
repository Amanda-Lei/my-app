import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pfp from '../images/pfp.JPG'
import 'bootstrap/dist/css/bootstrap.css';
import ReactMarkdown from 'react-markdown';

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
                        <h1>Hello, I'm Amanda :)</h1>
                        <br></br>
                        <ReactMarkdown>I’m a **third-year** student at Rutgers-New Brunswick, double majoring in **Computer Science** and **Human Resource Management**, with a minor in **Mathematics**.</ReactMarkdown>
                        <ReactMarkdown>I’m passionate about blending technology and human connection, thriving in environments that encourage creative thinking and adaptability. I built this website using **React.js** to help you get to know me better!</ReactMarkdown>
                        <ReactMarkdown>I’m actively seeking **Summer 2025 internship** opportunities. Feel free to reach out if you’d like to connect. Thanks for visiting!</ReactMarkdown>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;