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
            // console.log(res.data)
            // console.log(work)
        })
        .catch(err => console.log('error',err));
    },[])
    
    // console.log(cardState);
    return (
        <>
        <Jumbotron title={"Portfolio"} />
        <Container>
            <Row>
                <Col
                size="lg-8 md-12"
                attr="border rounded py-4 bg-light text-center"
                >
                    <Row>
                        <Col
                        size="md-8"
                        attr="offset-md-2">
                            <h2>Portfolio</h2>
                            <p>Click on each card titles to browse each source code.</p>
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
