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
        <Container class={"my-5"}>
            <Row>
                <Col
                size="lg-6 md-6 sm-12"
                attr="py-4 mr-3 bg-light borderline">
                    <h2 className="text-center">Contact Form</h2>
                    <hr />
                    <ContactForm />
                </Col>
                <Col 
                size="lg-3"
                attr="offset-lg-1 py-4 mr-3 bg-light text-center borderline">
                    <h2>Connect</h2>
                    <hr />
                    <a href ="https://www.linkedin.com/in/chris-kang-47886468/" target="_blank" rel="noopener noreferrer" >
                        <img className="mb-2" src="./images/linkedin.png" width="128" height="128" alt="Linkedin" />
                    </a>
                    <a href ="https://github.com/misterjaykay" target="_blank" rel="noopener noreferrer" >
                        <img className="mt-2" src="./images/github.png" width="128" height="128" alt="Github" />
                    </a>
                </Col>
            </Row>
        </Container>
        </>
    )
}
