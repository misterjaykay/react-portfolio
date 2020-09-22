import React, { useEffect, useState } from 'react';
import { Link, Route } from "react-router-dom";
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Card from '../components/Card';
import axios from "axios";
import Project from './Project';

export default function Portfolio(props) {
    const [work, setWork] = useState([]);

    useEffect(() => {
        axios.get("./data.json")
        .then(res => {
            setWork(res.data.portfolio)
            console.log(res.data)
            console.log(work)
        })
        .catch(err => console.log('error',err));
    },[])
    
    // console.log(cardState);
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
                            <Card value={work}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
