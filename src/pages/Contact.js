import React from 'react'
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import ContactForm from '../components/ContactForm';
import Jumbotron from "../components/Jumbotron";

export default function Contact() {
    return (
        <>
        <Jumbotron title={"Contact"} />
        <Container>
            <Row>
                <Col
                size="lg-6 md-6 sm-12"
                attr="border rounded py-4 mr-3 bg-light">
                    <h2 className="text-center">Contact Form</h2>
                    <hr />
                    <ContactForm />
                </Col>
                <Col 
                size="lg-3"
                attr="offset-lg-1 border rounded py-4 mr-3 bg-light">
                    <h2 className="text-center">Connect</h2>
                    <hr />
                    <img src="./images/linkedin.png" width="20" height="20" alt="Linkedin" />{" "}
                    <a href ="https://www.linkedin.com/in/chris-kang-47886468/" target="_blank">My Linkedin</a>
                    <br />
                    <img src="./images/github.png" width="20" height="20" alt="Github" />{" "}
                    <a href ="https://github.com/misterjaykay" target="_blank">My Github</a>
                </Col>
            </Row>
        </Container>
        </>
    )
}
