import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Points = () => {
  // Sample collection points (replace with your actual coordinates)
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
    <Container fluid className="bg-light py-4 mt-4">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card>
            <Card.Header as="h3" className="text-center">
              Puntos de Recolección
            </Card.Header>
            <Card.Body>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Points;