import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BenefitsSection = ({ benefits }) => (
    <Container className="my-5">
      <h2 className="text-center section-title mb-5">Beneficios</h2>
      <Row>
        {benefits.map((benefit, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm hover-scale">
              <Card.Body className="text-center">
                <div className="display-4 mb-4">{benefit.icon}</div>
                <p className="text-muted">{benefit.text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
);

export default BenefitsSection;