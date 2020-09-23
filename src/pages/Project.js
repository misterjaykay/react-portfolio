import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Card from '../components/Card';
import Jumbotron from "../components/Jumbotron";

export default function Project() {
    const [doneProj, setDoneProj] = useState([]);
    const [workingProj, setWorkingProj] = useState([]);

    useEffect(() => {
        axios.get("./data.json")
        .then(res => {
            setDoneProj(res.data.project[0].done)
            setWorkingProj(res.data.project[1].working)

            console.log(res.data.project[0].done)
            console.log(doneProj)
        })
        .catch(err => console.log('error',err));
    },[])
    
    return (
        <>
        <Jumbotron title={"Project"} />
        <Container>
            <Row>
                <Col
                size="lg-8"
                attr="offset-lg-2 border rounded py-4 bg-light text-center">
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
                            <Card
                            attr="my-4 border border-dark bg-light rounded" 
                            value={doneProj} />
                        </Col>
                        <Col 
                        size="md-6">
                            <Card
                            attr="my-4 border border-dark rounded" 
                            value={workingProj} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}
