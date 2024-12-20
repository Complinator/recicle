import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCarousel from './Components/Carousel';
import Map from './Components/Map';

const Points = () => {
  return (
    <Container>
      <h2 className="my-4">Encuentra tu punto de reciclaje y servicio técnico</h2>
      <p>Localiza fácilmente los puntos de reciclaje, donde puedes desechar tus residuos electrónicos de manera responsable. Además, descubre servicios técnicos locales que reparan tus dispositivos, alargando su vida útil y reduciendo el impacto ambiental.</p>

      <h3 className="my-4">Recicla cerca de ti</h3>
      <Row>
        <Col md={8}>
          <Map />
        </Col>
        <Col md={4}>
        <Card>
          <Card.Header style={{ backgroundColor: "#00A19B" }}>
            <strong>Puntos de Reciclaje y Servicio</strong>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroupItem className="d-flex align-items-center">
              <img 
                src="Img/Markers/locationr.png" 
                alt="Recycle" 
                style={{ height: "40px", marginRight: "15px" }} 
              />
              <div>
                <i className="fas fa-recycle"></i> Centro de Reciclaje
                <p>Acepta: Electrónicos, Baterías, Llantas</p>
              </div>
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <img 
                src="Img/Markers/locationts.png" 
                alt="Service" 
                style={{ height: "40px", marginRight: "15px" }} 
              />
              <div>
                <i className="fas fa-wrench"></i> Servicio Técnico
                <p>Reparación de laptops, celulares y más</p>
              </div>
            </ListGroupItem>
            <ListGroupItem className="d-flex align-items-center">
              <img 
                src="Img/Markers/locationcp.png" 
                alt="Green Point" 
                style={{ height: "40px", marginRight: "15px" }} 
              />
              <div>
                <i className="fas fa-recycle"></i> Punto Verde
                <p>Recepción de todo tipo de residuos</p>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Card>
        </Col>
      </Row>

      <h3 className="my-4">¿Por qué es importante reciclar?</h3>
      <Row>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <i className="fas fa-leaf fa-3x"></i>
              <Card.Title>Reduce la contaminación</Card.Title>
              <Card.Text>
                Al reciclar, evitas que los residuos terminen en vertederos o medios naturales, disminuyendo la contaminación ambiental.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <i className="fas fa-cogs fa-3x"></i>
              <Card.Title>Fomenta la economía circular</Card.Title>
              <Card.Text>
                El reciclaje permite reutilizar los materiales, cerrando el ciclo de vida de los productos y fomentando una economía más sostenible.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <i className="fas fa-recycle fa-3x"></i>
              <Card.Title>Ahorras recursos valiosos</Card.Title>
              <Card.Text>
                Al reciclar, evitas el desperdicio de metales raros y otros materiales importantes que pueden ser reutilizados.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="my-4">Información sobre el reciclaje</h3>
      <InfoCarousel />
    </Container>
  );
};

export default Points;