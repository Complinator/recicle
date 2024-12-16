import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import L from 'leaflet';
import InfoCarousel from './Components/Carousel';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Points = () => {
  const collectionPoints = [
    { 
      id: 1, 
      name: 'Punto Centro', 
      position: [19.4326, -99.1332], // Mexico City coordinates
      description: 'Centro de recolección principal'
    },
    { 
      id: 2, 
      name: 'Punto Norte', 
      position: [19.4969, -99.1231], 
      description: 'Punto de recolección zona norte'
    },
    { 
      id: 3, 
      name: 'Punto Sur', 
      position: [19.3430, -99.1556], 
      description: 'Punto de recolección zona sur'
    }
  ];

  return (
    <Container>
      <h2 className="my-4">Encuentra tu punto de reciclaje y servicio técnico</h2>
      <p>Localiza fácilmente los puntos de reciclaje, donde puedes desechar tus residuos electrónicos de manera responsable. Además, descubre servicios técnicos locales que reparan tus dispositivos, alargando su vida útil y reduciendo el impacto ambiental.</p>

      <h3 className="my-4">Recicla cerca de ti</h3>
      <Row>
        <Col md={8}>
        <MapContainer 
                center={[19.4326, -99.1332]} 
                zoom={10} 
                style={{ height: '400px', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {collectionPoints.map(point => (
                  <Marker key={point.id} position={point.position}>
                    <Popup>
                      <strong>{point.name}</strong>
                      <br />
                      {point.description}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header style={{backgroundColor: "#00A19B"}}><strong>Puntos de Reciclaje y Servicio</strong></Card.Header>
            <ListGroup variant="flush">
              <ListGroupItem>
                <i className="fas fa-recycle"></i> Centro de Reciclaje XYZ
                <p>Acepta: Electrónicos, Baterías, Llantas</p>
              </ListGroupItem>
              <ListGroupItem>
                <i className="fas fa-wrench"></i> Servicio Técnico ABC
                <p>Reparación de laptops, celulares y más</p>
              </ListGroupItem>
              <ListGroupItem>
                <i className="fas fa-recycle"></i> Punto Verde de la Ciudad
                <p>Recepción de todo tipo de residuos</p>
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