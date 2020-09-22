import React from 'react'
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <Container>
            <Row>
                <Col
                size="lg-6 md-6 sm-12"
                attr="border rounded py-4 mr-3 bg-light"
                >
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
}
