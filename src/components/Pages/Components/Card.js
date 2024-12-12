import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'react-bootstrap';

const ElectronicComponentCard = ({ image, title, group, description }) => {
  return (
    <Card className="h-100 shadow-sm hover:shadow-lg transition-shadow duration-300 card-hover-tilt">
      <CardImg 
        variant="top" 
        src={image} 
        alt={title} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <CardBody className='bg-light'>
        <CardTitle>{title}</CardTitle>
        <CardText className="text-muted">{group}</CardText>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ElectronicComponentCard;