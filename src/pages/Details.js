import React from "react";
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function Details(props) {
  return (
    <>
      <Jumbotron title={"portfolio"}/>
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
              size="md-8"
              attr="offset-md-2">
                  <h4>Title</h4>
                  <p>url</p>
                  <p>img</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Details;
