import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import CardOne from '../components/Card/cardOne';
import Jumbotron from "../components/Jumbotron";

export default function Project() {
    return (
        <>
        <Jumbotron title={"Project"} />
        <Container attr={"my-5"}>
            <Row>
                <Col
                size="lg-8"
                attr="offset-lg-2 py-4 bg-light text-center borderline">
                    <Row>
                        <Col
                        size="md-12">
                            <h2>Projects</h2>
                            <p>Here are some of the project that I am currently participating or finished.</p>
                            <p>Project will be hard challenge, but I know It will always be fun.</p>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                        size="md-6"
                        attr="offset-md-3 card">     
                            <CardOne
                            attr="my-4 border border-dark bg-light rounded" 
                            value={'project'} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}
