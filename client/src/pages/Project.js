import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import CardTwo from '../components/Card/cardTwo';
import Jumbotron from "../components/Jumbotron";

export default function Project() {
    return (
        <>
        <Jumbotron title={"Project"} />
        <Container class={"my-5"}>
            <Row>
                <Col
                size="lg-8"
                attr="offset-lg-2 py-4 bg-light text-center borderline">
                    <Row>
                        <Col
                        size="md-6">
                            <h2>Finished Projects</h2>
                            <p>Here are some of the project that I participate and finished.</p>
                            <hr />
                        </Col>
                        <Col
                        size="md-6">
                            <h2>Current Projects</h2>
                            <p>It will be hard to complete, but I know It will be fun.</p>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                        size="md-6">      
                            <CardTwo
                            attr="my-4 border border-dark bg-light rounded" 
                            value={'doneProj'} />
                        </Col>
                        <Col 
                        size="md-6">
                            <CardTwo
                            attr="my-4 border border-dark rounded" 
                            value={'workingProj'} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}
