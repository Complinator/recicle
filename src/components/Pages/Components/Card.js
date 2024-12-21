import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from 'react-bootstrap';
import { ShoppingCart, Camera } from 'lucide-react';
import { useCart } from '../../../context/ShoppingCart';

const ElectronicComponentCard = ({ image, title, group, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, isInCart } = useCart();

  // Generate a fixed price based on the component type
  const getComponentPrice = () => {
    const prices = {
      'Resistor': '500',
      'Capacitor': '800',
      'Inductor': '1200',
      'Transistor': '1500',
      'Diodo': '700',
      'Circuito Integrado': '3000'
    };
    return prices[title] || '1000';
  };

  const itemData = {
    id: `component-${title.toLowerCase().replace(/\s+/g, '-')}`,
    title,
    price: `$${getComponentPrice()} CLP`,
    status: 'Nuevo',
    location: 'En stock',
    contact: 'Tienda oficial',
    img: image
  };

  return (
    <Card 
      className="h-100 shadow-sm hover:shadow-lg transition-shadow duration-300 card-hover-tilt"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="position-relative">
        <CardImg 
          variant="top" 
          src={image} 
          alt={title} 
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        {isHovered && (
          <div 
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <Button variant="outline-light">
              <Camera className="me-2" size={16} />
              Ver más fotos
            </Button>
            <Button 
              variant="success"
              onClick={() => addToCart(itemData)}
              disabled={isInCart(itemData.id)}
            >
              <ShoppingCart size={16} />
            </Button>
          </div>
        )}
      </div>
      <CardBody className='bg-light'>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <CardTitle>{title}</CardTitle>
          <span className="text-success fw-bold">${getComponentPrice()} CLP</span>
        </div>
        <CardText className="text-muted small mb-2">{group}</CardText>
        <CardText className="small">{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ElectronicComponentCard;