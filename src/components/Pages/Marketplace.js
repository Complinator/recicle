import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Camera, Upload, ShoppingBag, RefreshCw, Sprout, Banknote, Recycle } from 'lucide-react';
import ElectronicComponentCard from './Components/Card';

const Marketplace = () => {
  const [isHovered, setIsHovered] = useState(null);

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

  const categories = [
    "Teléfonos móviles", "Computadoras y laptops", "Televisores y monitores",
    "Electrodomésticos pequeños", "Impresoras", "Tablets y e-readers",
    "Refrigeradores y congeladores", "Hornos microondas", "Electrodomésticos grandes",
    "Consolas de videojuegos", "Cámaras fotográficas", "Aires acondicionados"
  ];

  const featuredItems = [
    {
      title: "Laptop Lenovo ThinkPad Reacondicionada",
      price: "$150.000 CLP",
      status: "Batería nueva, ligero desgaste exterior",
      location: "Viña del Mar",
      contact: "María González",
      img: "Img/Market/lenovo.webp"
    },
    {
      title: "Celular iPhone 8 Usado",
      price: "$90.000 CLP",
      status: "Pantalla impecable, incluye cargador",
      location: "Valparaíso",
      contact: "Pedro Pérez",
      img: "Img/Market/Iphone.webp"
    }
  ];

  const benefits = [
    { icon: <Sprout size={64} className="text-success" />, text: "Reducción de residuos electrónicos" },
    { icon: <Banknote size={64} className="text-success" />, text: "Ahorro económico al comprar equipos reacondicionados" },
    { icon: <Recycle size={64} className="text-success" />, text: "Promoción de la reutilización y el reciclaje" }
  ];

  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Section */}
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

      {/* Benefits Section */}
      <Container className="my-5">
      <h2 className="text-center section-title mb-5">Beneficios</h2>
        <Row>
          {benefits.map((benefit, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-scale" style={{
                transition: 'transform 0.3s ease-in-out'
              }}>
                <Card.Body className="text-center">
                  <div className="display-4 mb-4">{benefit.icon}</div>
                  <p className="text-muted">{benefit.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5">
      <h2 className="text-center section-title mb-5">Componentes</h2>
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

      {/* Form Section */}
      <Container className="my-5">
        <Card className="shadow-sm mx-auto" style={{ maxWidth: '700px' }}>
          <Card.Header className="bg-white">
            <h4 className="mb-0">Publicar un Dispositivo</h4>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control 
                  type="text"
                  placeholder="Nombre del Producto (ej: Laptop HP Pavilion)"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Descripción del Producto"
                />
              </Form.Group>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control type="text" placeholder="Precio" />
                </Col>
                <Col md={6}>
                  <Form.Control type="text" placeholder="Ubicación" />
                </Col>
              </Row>
              <div className="d-flex align-items-center gap-3 mb-3">
                <Button variant="outline-secondary">
                  <Upload className="me-2" size={16} />
                  Subir Fotos
                </Button>
                <small className="text-muted">Hasta 5 imágenes</small>
              </div>
              <Button variant="dark" className="w-100">
                <ShoppingBag className="me-2" size={16} />
                Publicar Mi Dispositivo
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      {/* Featured Items */}
      <Container className="my-5">
      <h2 className="text-center section-title mb-5">Dispositivos Destacados</h2>
        <Row>
          {featuredItems.map((item, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card 
                className="h-100 shadow-sm" 
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                style={{ transition: 'all 0.3s ease' }}
              >
                <div className="position-relative">
                  <img 
                    src={item.img}
                    alt="dispositivo"
                    className="w-100 object-fit-cover"
                    style={{ height: '200px' }}
                  />
                  {isHovered === index && (
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
                         style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                      <Button variant="outline-light">
                        <Camera className="me-2" size={16} />
                        Ver más fotos
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

      {/* Categories */}
      <Container className="my-5">
        <h2 className="fw-bold mb-4">Categorías</h2>
        <Row className="g-3">
          {categories.map((category, index) => (
            <Col key={index} sm={6} md={4} lg={3}>
              <Button 
                variant="outline-secondary" 
                className="w-100 text-start"
                style={{ transition: 'background-color 0.3s ease' }}
              >
                <RefreshCw className="me-2" size={16} />
                {category}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Marketplace;