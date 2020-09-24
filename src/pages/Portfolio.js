import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Card from '../components/Card';
import axios from "axios";
import Jumbotron from "../components/Jumbotron";

export default function Portfolio(props) {
    const [work, setWork] = useState([]);

    useEffect(() => {
        axios.get("./data.json")
        .then(res => {
            setWork(res.data.portfolio)
        })
        .catch(err => console.log('error',err));
    },[])
    
    return (
        <>
        <Jumbotron title={"Portfolio"} />
        <Container class={"my-5"}>
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
                        attr="offset-md-3">
                            <Card
                            attr="my-4 border border-dark rounded"
                            value={work}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}
