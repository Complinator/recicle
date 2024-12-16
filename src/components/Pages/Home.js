import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MapPin, Recycle, BookOpen, ShoppingCart } from 'lucide-react';
import "../../App.css";
import Chart from './Components/Chart';

const Home = () => {
  const [hover, setHover] = useState(false);
  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <Row className="text-white text-center py-5 mx-0" style={{backgroundColor: "#00A19B"}}>
        <Col>
          <h1 className="display-4 mb-4">¡Dale una Segunda Vida a tus Electrónicos!</h1>
          <p className="lead mb-4">
            Los residuos electrónicos no son el fin, sino el inicio de un ciclo. 
            Aprende a reciclar, reparar y reutilizar tus dispositivos para proteger 
            el planeta y fomentar la economía circular.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="light" as={Link} to="/membresia">
              Hazte miembro
            </Button>
            <Button variant="outline-light" as={Link} to="/informacion">
              Conoce Más
            </Button>
          </div>
        </Col>
      </Row>
      
      {/* Problem Overview */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <Card className="border-0">
              <Card.Body>
                <Card.Title className="h2 mb-4">El Problema de los Residuos Electrónicos</Card.Title>
                <Card.Text>
                  Cada año, toneladas de dispositivos electrónicos terminan en vertederos, 
                  liberando toxinas al medio ambiente y desperdiciando recursos valiosos 
                  como metales preciosos. Chile no es ajeno a esta problemática.
                </Card.Text>
                <div className="d-flex justify-content-between mt-4">
                  <div className="text-center">
                    <h3 className="text-primary">180,000+</h3>
                    <p>Toneladas de RAEE anuales</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-warning">10%</h3>
                    <p>Reciclados adecuadamente</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            {/* Placeholder for interactive graphic */}
            <Chart />
          </Col>
        </Row>
      </Container>

      {/* How to Contribute */}
      <Container className="my-5 bg-light py-5">
        <Row>
          <Col className="text-center">
            <h2 className="mb-4">Únete a la Revuelta</h2>
            <Row className="g-4">
              <Col md={3}>
                <Card className="h-100 text-center border-0 bg-transparent">
                  <Recycle size={64} className="mx-auto mb-3 text-primary" />
                  <Card.Body>
                    <Card.Title>Recicla</Card.Title>
                    <Card.Text>
                      Tus electrónicos en nuestros puntos de acopio
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="h-100 text-center border-0 bg-transparent">
                  <BookOpen size={64} className="mx-auto mb-3 text-success" />
                  <Card.Body>
                    <Card.Title>Aprende</Card.Title>
                    <Card.Text>
                      En nuestros talleres sobre gestión de electrónicos
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="h-100 text-center border-0 bg-transparent">
                  <ShoppingCart size={64} className="mx-auto mb-3 text-info" />
                  <Card.Body>
                    <Card.Title>Comercializa</Card.Title>
                    <Card.Text>
                      Dispositivos de segunda mano en nuestro marketplace
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="h-100 text-center border-0 bg-transparent">
                  <MapPin size={64} className="mx-auto mb-3 text-warning" />
                  <Card.Body>
                    <Card.Title>Encuentra</Card.Title>
                    <Card.Text>
                      Puntos de reciclaje cerca de ti
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="mt-4">
              <Button style={{backgroundColor: "#00A19B", borderColor: "#00A19B"}} className="me-3">
                Encontrar Punto de Reciclaje
              </Button>
              <Button style={{
                borderColor: "#00A19B",
                backgroundColor: hover ? "#00A19B" : "inherit",
                color: hover ? "white" : "#00A19B",
                transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
                Participar en Taller
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Testimonials */}
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Historias que Inspiran</h2>
            <Carousel>
              <Carousel.Item>
                <Card className="text-center border-0">
                  <Card.Body>
                    <Card.Text className="fst-italic mb-3">
                      "Desde que conocí Revuelta de RAEE, he logrado reducir 
                      significativamente los electrónicos que desecho. ¡Es una 
                      iniciativa transformadora!"
                    </Card.Text>
                    <Card.Footer className="bg-transparent border-0">
                      — Claudia P., Viña del Mar
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className="text-center border-0">
                  <Card.Body>
                    <Card.Text className="fst-italic mb-3">
                      "Reparé mi laptop en uno de los servicios técnicos 
                      recomendados por la campaña. ¡Gracias por el apoyo!"
                    </Card.Text>
                    <Card.Footer className="bg-transparent border-0">
                      — Matías R., Valparaíso
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;