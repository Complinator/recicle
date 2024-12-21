import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RefreshCw } from 'lucide-react';

const Categories = ({ categories }) => (
    <Container className="my-5">
      <h2 className="fw-bold mb-4">Categorías</h2>
      <Row className="g-3">
        {categories.map((category, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Button 
              variant="outline-secondary" 
              className="w-100 text-start"
            >
              <RefreshCw className="me-2" size={16} />
              {category}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
);

export default Categories;