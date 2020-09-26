import React, { useContext }  from "react";
import { useParams } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import DataContext from '../utils/DataContext';

function Details(props) {
const id = props.match.params.id;
const context = useContext(DataContext);
const filter = context.filter(function(e) {
  return e.id === id;
})
console.log(props);
console.log(context);
console.log(filter);
  return (
    <>
      <Jumbotron title={"Portfolio"}/>
      <Container attr={"my-5"}>
        <Row>
          <Col
          size="lg-8 md-12"
          attr="py-4 bg-light text-center borderline">
            <Row>
              <Col
              size="md-8"
              attr="offset-md-2">
                  <h2>{filter[0].name}</h2>
                  <hr />
              </Col>
            </Row>
            <Row>
            <Col
              size="md-8"
              attr="offset-md-2">
                  <img src={filter[0].screen} className="img-fluid" width="100%" alt={filter[0].name} />
                  <a href={filter[0].url}>Link to Github</a>
                  <p>{filter[0].desc}</p>
                  <hr />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Details;
