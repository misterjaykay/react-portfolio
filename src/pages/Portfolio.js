import React, { useState } from 'react'
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Card from '../components/Card';
import CardContext from '../utils/CardContext';

export default function Portfolio() {
    
    const [articleState, setArticleState] = useState({
        title: "Team Profile Generator",
        url: "https://github.com/misterjaykay/team-profile-generator",
        img: "https://i.imgur.com/wc7zNlQ.jpg"
      });

    return (
        <CardContext.Provider value={articleState}>
        <Container>
            <Row>
                <Col
                size="lg-8 md-12"
                attr="border rounded py-4 bg-light text-center"
                >
                    <Row>
                        <Col
                        size="md-6"
                        attr="my-3"
                        >
                            <Card />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </CardContext.Provider>
    )
}
