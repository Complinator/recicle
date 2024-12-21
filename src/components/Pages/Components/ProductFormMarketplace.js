import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Upload, ShoppingBag } from 'lucide-react';


const ProductForm = () => (
    <Container className="my-5">
      <Card className="shadow-sm mx-auto" style={{ maxWidth: '700px' }}>
        <Card.Header className="bg-white">
          <h4 className="mb-0">Publicar un Dispositivo</h4>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control 
                type="text"
                placeholder="Nombre del Producto (ej: Laptop HP Pavilion)"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción del Producto"
              />
            </Form.Group>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control type="text" placeholder="Precio" />
              </Col>
              <Col md={6}>
                <Form.Control type="text" placeholder="Ubicación" />
              </Col>
            </Row>
            <div className="d-flex align-items-center gap-3 mb-3">
              <Button variant="outline-secondary">
                <Upload className="me-2" size={16} />
                Subir Fotos
              </Button>
              <small className="text-muted">Hasta 5 imágenes</small>
            </div>
            <Button variant="dark" className="w-100">
              <ShoppingBag className="me-2" size={16} />
              Publicar Mi Dispositivo
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
);

export default ProductForm;