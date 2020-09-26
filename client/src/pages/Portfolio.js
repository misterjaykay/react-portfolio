import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import CardOne from '../components/Card/cardOne';
import Jumbotron from "../components/Jumbotron";
import Texts from '../components/Texts';

export default function Portfolio() {
    return (
        <>
            <Jumbotron title={"Portfolio"} />
            <Container attr={"my-5"}>
                <Row>
                    <Col
                    size="lg-8 md-12"
                    attr="py-4 bg-light text-center borderline">
                        <Row>
                            <Col
                            size="md-8"
                            attr="offset-md-2">
                                <h2>Portfolio</h2>
                                <p>Click on each card buttons to browse each source code.</p>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col
                            size="md-6"
                            attr="offset-md-3 card">
                                <CardOne
                                attr="my-4 border border-dark rounded"
                                value={"portfolio"}
                                />
                                <Texts />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
