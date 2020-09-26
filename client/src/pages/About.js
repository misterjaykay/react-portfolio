import React from 'react'
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Article from '../components/Article';
import Image from '../components/Image';
import Time from '../components/Time';
import Jumbotron from "../components/Jumbotron";

export default function About() {
    return (
        <>
        <Jumbotron title={"About Me"} />
        <Container attr={"my-5"}>
           <Row>
               <Col 
               size="lg-7 md-7"
               attr="py-4 mr-3 bg-light borderline">
                    <h2 class="text-center">About Me</h2>
                    <hr />
                    <Row>
                    <Col size="lg-3 md-6">
                        <Image url={"./images/spongebob.jpg"}/>
                    </Col>
                    <Col size="lg-9 md-6">
                            <Article />
                    </Col>
                    </Row>
               </Col>
               <Col size="lg-3 md-3"
                    attr="offset-lg-1 offset-md-1">
                   <Row>
                       <Col 
                       size="lg-12 md-12"
                       attr="py-4 mb-3 bg-light text-center borderline">
                           <h2>Current Time</h2>
                           <hr />
                           <Time />
                       </Col>
                   </Row>
               </Col>
           </Row>
        </Container>
        </>
    )
}
