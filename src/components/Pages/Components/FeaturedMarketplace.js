import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Camera, ShoppingCart } from 'lucide-react';
import { useCart } from '../../../context/ShoppingCart';

const FeaturedItems = ({ items }) => {
    const [isHovered, setIsHovered] = useState(null);
    const { addToCart, isInCart } = useCart();
  
    return (
        <Container className="my-5">
          <h2 className="text-center section-title mb-5">Dispositivos Destacados</h2>
          <Row>
            {items.map((item, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card 
                  className="h-100 shadow-sm" 
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="position-relative">
                    <img 
                      src={item.img}
                      alt="dispositivo"
                      className="w-100 object-fit-cover"
                      style={{ height: '200px' }}
                    />
                    {isHovered === index && (
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2" 
                           style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <Button variant="outline-light">
                          <Camera className="me-2" size={16} />
                          Ver más fotos
                        </Button>
                        <Button 
                          variant="success"
                          onClick={() => addToCart({ ...item, id: `${item.title}-${index}` })}
                          disabled={isInCart(`${item.title}-${index}`)}
                        >
                          <ShoppingCart size={16} />
                        </Button>
                      </div>
                    )}
                  </div>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <p className="text-success fw-bold mb-2">{item.price}</p>
                    <p className="text-muted small mb-1">{item.status}</p>
                    <p className="text-muted small mb-1">📍 {item.location}</p>
                    <p className="text-muted small mb-0">👤 {item.contact}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
};

export default FeaturedItems;