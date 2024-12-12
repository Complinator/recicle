import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ElectronicComponentCard from './Components/Card';

const Marketplace = () => {
    const components = [
        {
            image: 'Img/Components/resistor.png',
            title: 'Resistor',
            group: 'Componentes Pasivos',
            description: 'Un resistor es un componente eléctrico pasivo de dos terminales que se utiliza para controlar o limitar el flujo de corriente eléctrica en un circuito electrónico.',
        },
        {
            image: 'Img/Components/capacitor.jpg',
            title: 'Capacitor',
            group: 'Componentes Pasivos',
            description: 'Un capacitor es un componente eléctrico pasivo de dos terminales utilizado para almacenar energía eléctrica en un campo eléctrico.',
        },
        {
            image: 'Img/Components/inductor.webp',
            title: 'Inductor',
            group: 'Componentes Pasivos',
            description: 'Un inductor es un componente eléctrico pasivo de dos terminales que almacena energía en forma de un campo magnético cuando fluye corriente eléctrica a través de él.',
        },
        {
            image: 'Img/Components/transistor.jpg',
            title: 'Transistor',
            group: 'Componentes Activos',
            description: 'Un transistor es un dispositivo semiconductor utilizado para amplificar o conmutar señales electrónicas y energía eléctrica.',
        },
        {
            image: 'Img/Components/diode.jpg',
            title: 'Diodo',
            group: 'Componentes Activos',
            description: 'Un diodo es un componente electrónico de dos terminales que conduce corriente principalmente en una dirección (conducción asimétrica).',
        },
        {
            image: 'Img/Components/integratedcircuit.png',
            title: 'Circuito Integrado',
            group: 'Componentes Activos',
            description: 'Un circuito integrado (CI) es un conjunto de circuitos electrónicos en una pequeña pieza plana (o "chip") de material semiconductor que normalmente es silicio.',
        },
    ];
    

  return (
    <Container className="my-5">
      <Row xs={1} sm={2} md={3} className="g-4">
        {components.map((component, index) => (
          <Col key={index}>
            <ElectronicComponentCard
              image={component.image}
              title={component.title}
              group={component.group}
              description={component.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Marketplace;