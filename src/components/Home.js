import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pfp from '../images/pfp.JPG'
import 'bootstrap/dist/css/bootstrap.css';
// #4527A0
function Home() {
    return (
        <section style={{ backgroundColor: 'white', display: 'flex' }}>
            <Container className="d-flex justify-content-center my-5">
                <Row className="align-items-center justify-content-center">
                    <Col md={1}></Col>
                    <Col md={4} className="d-flex justify-content-center">
                        <Image src={pfp} roundedCircle fluid alt="Amanda's profile picture" style={{ width: '250px', height: '300px', objectFit: 'cover' }}/>
                    </Col>
                    <Col md={6}>
                        <h1>I'm Amanda, nice to meet you :)</h1>
                        <p>I am pursuing degrees in Computer Science, Human Resource Management, and Mathematics at Rutgers University-New Brunswick! This website is a constant work in progress, so feel free to explore as it takes shape!</p>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;