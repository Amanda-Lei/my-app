import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pfp from '../images/pfp.JPG'
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
    return (
        <Container className="d-flex justify-content-center my-5">
            <Row className="align-items-center justify-content-center">
                <Col md={4} className="d-flex justify-content-center">
                    <Image src={pfp} roundedCircle fluid alt="Amanda's profile picture" style={{ width: '200px', height: '200px', objectFit: 'cover' }}/>
                </Col>
                <Col md={8}>
                    <h1>I'm Amanda, nice to meet you :)</h1>
                    <p>I am pursuing degrees in Computer Science, Human Resource Management, and Mathematics at Rutgers University-New Brunswick! This website is a constant work in progress, so feel free to explore as it takes shape!</p>
                </Col>
            </Row>
        </Container>
    );
}

export default NavBar;