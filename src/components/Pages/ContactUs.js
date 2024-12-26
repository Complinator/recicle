import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Recycle, Mail, Send, User, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  const [hover, setHover] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 py-5">
      <Container className="py-5">
        <Row className="justify-content-center align-items-center g-4">
          {/* Columna de información */}
          <Col lg={5}>
            <div className="mb-4 d-flex align-items-center gap-2">
              <Recycle style={{color: "#00A19B"}} size={32} />
              <h1 className="m-0 fw-bold" style={{color: "#00A19B"}}>Recicla con REvuelta</h1>
            </div>
            
            <Card className="border-0 bg-white bg-opacity-75 shadow-sm mb-4">
              <Card.Body>
                <h2 className="h3 mb-4">Únete a Nuestra Misión de Reciclaje</h2>
                <p className="text-muted">
                  Comprometidos con un futuro sostenible a través del reciclaje responsable de residuos electrónicos. 
                  Cada dispositivo reciclado es un paso hacia un planeta más limpio.
                </p>
              </Card.Body>
            </Card>

            <Card className="border-0 bg-white bg-opacity-75 shadow-sm">
              <Card.Body>
                <div className="mb-4">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <MapPin style={{color: "#00A19B"}} size={20} />
                    <h5 className="m-0">Ubicación</h5>
                  </div>
                  <p className="text-muted ms-4 mb-0">Av. del Reciclaje 123, Ciudad Verde</p>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Phone style={{color: "#00A19B"}} size={20} />
                    <h5 className="m-0">Teléfono</h5>
                  </div>
                  <p className="text-muted ms-4 mb-0">+34 900 123 456</p>
                </div>

                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Mail style={{color: "#00A19B"}} size={20} />
                    <h5 className="m-0">Correo Electrónico</h5>
                  </div>
                  <p className="text-muted ms-4 mb-0">contacto@ecotechreciclaje.es</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Columna del formulario */}
          <Col lg={7}>
            <Card className="border-0 shadow bg-white bg-opacity-75">
              <Card.Body className="p-4">
                <h2 className="h3 mb-4">Contáctanos</h2>
                <p className="text-muted mb-4">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>
                          <User size={18} className="me-2" style={{color: "#00A19B"}} />
                          Nombre
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Tu nombre"
                          className="bg-white bg-opacity-75"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor, introduce tu nombre.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>
                          <Mail size={18} className="me-2" style={{color: "#00A19B"}} />
                          Correo Electrónico
                        </Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="tu@email.com"
                          className="bg-white bg-opacity-75"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor, introduce un correo electrónico válido.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control
                          required
                          as="textarea"
                          rows={5}
                          placeholder="Cuéntanos sobre tus necesidades de reciclaje..."
                          className="bg-white bg-opacity-75"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor, escribe tu mensaje.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Button 
                        type="submit" 
                        variant="success" 
                        size="lg" 
                        className="w-100"
                        style={{backgroundColor: hover? "#8EC5C0" : "#00A19B", borderColor: hover? "#8EC5C0" : "#00A19B"}}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                      >
                        <Send size={18} className="me-2" />
                        Enviar Mensaje
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;