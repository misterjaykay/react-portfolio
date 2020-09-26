import React from "react";
import Container from '../components/Container';
import Jumbotron from "../components/Jumbotron";
import Row from '../components/Row';
import Col from '../components/Col';

function Modals() {
  return (
    <>
    <Jumbotron title={"Resume"} />
    <Container attr={"my-5"}>
      <Row>
        <Col
          size="lg-9 md-9 sm-12"
          attr="py-4 mr-3 bg-light borderline">
            <h2 className="text-center">Resume</h2>
            <hr />
            <div>
                <embed className="imgmodal" src="./images/resume/jhk-resume.pdf" width="800px" height="800px" />
            </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Modals;