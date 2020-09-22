import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Card from '../components/Card';

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
        <Container>
            <Row>
                <Col
                size="lg-8 md-12"
                attr="border rounded py-4 bg-light text-center"
                >
                    {/* <Link to={`${props.match.url}/project`} role="button" className="btn btn-link">
                        See My Projects
                    </Link>{" "}
                    <Route exact path={`${props.match.url}/project`} component={Project} /> */}
                    <Row>
                        <Col
                        size="md-8"
                        attr="my-3"
                        >      
                            <Card value={doneProj} />
                            <Card value={workingProj} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
