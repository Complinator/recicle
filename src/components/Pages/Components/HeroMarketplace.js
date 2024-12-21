import React from 'react';
import { Container } from 'react-bootstrap';

const HeroSection = () => (
    <div className="py-5" style={{ 
      background: 'linear-gradient(to right, #48bb78, #4299e1)',
      color: 'white'
    }}>
      <Container className="text-center">
        <h1 className="display-4 fw-bold mb-4">Marketplace Circular</h1>
        <p className="fs-4">Dale una Segunda Vida a tus Dispositivos</p>
        <p className="mt-4">
          Compra o vende tus dispositivos electrónicos usados de manera segura y responsable. 
          Aquí tu tecnología tiene una nueva oportunidad, fomentando la economía circular y cuidando el medio ambiente.
        </p>
      </Container>
    </div>
);

export default HeroSection;