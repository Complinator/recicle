import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { 
  Recycle, 
  ShoppingCart, 
  Lightbulb, 
  Target, 
  Eye, 
  MapPin, 
  BookOpen, 
  ShoppingBag,
  Globe,
  BarChart3,
  Zap
} from 'lucide-react';
import "../../App.css";
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const StatCard = ({ icon: Icon, title, value }) => (
    <Card 
      className="border-0 shadow-sm h-100 overflow-hidden"
      data-animate="true"
      id={title}
    >
      <Card.Body className="d-flex align-items-center p-4">
        <div className="rounded-circle bg-success bg-opacity-10 p-3 me-3">
          <Icon style={{color: "#00A19B"}} size={24} />
        </div>
        <div>
          <h3 className="h5 mb-1">{value}</h3>
          <p className="text-muted mb-0 small">{title}</p>
        </div>
      </Card.Body>
    </Card>
  );

  const ActionCard = ({ icon: Icon, title, onClick }) => (
    <Card 
      className="border-0 shadow-sm h-100 cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <Card.Body className="text-center p-4">
        <div className="rounded-circle bg-success bg-opacity-10 p-3 mx-auto mb-3" style={{ width: 'fit-content' }}>
          <Icon style={{color: "#00A19B"}} size={24} />
        </div>
        <h3 className="h6 mb-0">{title}</h3>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <div 
        className="text-center mb-5"
        data-animate="true"
        id="hero"
      >
        <h1 className="display-4 text-center section-title mb-5 fw-bold">El Problema de los Residuos Electrónicos</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
          Cada año, toneladas de dispositivos electrónicos terminan en vertederos, liberando toxinas al medio ambiente 
          y desperdiciando recursos valiosos como metales preciosos. Chile no es ajeno a esta problemática. 
          Revuelta de RAEE trabaja para revertir esta tendencia promoviendo prácticas sostenibles que beneficien 
          tanto a las personas como al planeta.
        </p>
      </div>

      {/* Stats Grid */}
      <Row className="g-4 mb-5">
        <Col md={4}>
          <StatCard 
            icon={Globe} 
            title="Residuos Generados" 
            value="180,000+ toneladas anuales"
          />
        </Col>
        <Col md={4}>
          <StatCard 
            icon={BarChart3} 
            title="Tasa de Reciclaje" 
            value="Solo 10% reciclado adecuadamente"
          />
        </Col>
        <Col md={4}>
          <StatCard 
            icon={Zap} 
            title="Impacto" 
            value="70% menos emisiones de carbono"
          />
        </Col>
      </Row>

      {/* Campaign Objective */}
      <Card 
        className="border-0 shadow-sm mb-5 overflow-hidden bg-light"
        data-animate="true"
        id="objective"
      >
        <Card.Body className="p-5 text-center">
        <h2 className="text-center section-title mb-5">¡Transformemos residuos electrónicos en oportunidades!</h2>
          <p className="lead mb-4">
            Promovemos el reciclaje, reparación y reutilización de dispositivos electrónicos 
            para reducir el impacto ambiental y fomentar la economía circular
          </p>
          <Row className="g-4">
            <Col md={4}>
              <ActionCard icon={MapPin} onClick={() => navigate("/points")} title="Encuentra un Punto de Reciclaje" />
            </Col>
            <Col md={4}>
              <ActionCard icon={BookOpen} onClick={() => navigate("/news")} title="Explora Talleres y Material Educativo" />
            </Col>
            <Col md={4}>
              <ActionCard icon={ShoppingBag} onClick={() => navigate("/market")} title="Visita Nuestro Marketplace" />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* About Us Section */}
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card 
            className="border-0 shadow-sm h-100"
            data-animate="true"
            id="about"
          >
            <Card.Body className="p-4">
                <Lightbulb className="mb-3" size={28} style={{color: "#00A19B"}} />
              <h3 className="h4 mb-3">¿Qué es Revuelta?</h3>
              <p className="text-muted mb-0">
                Revuelta es una campaña que busca gestionar de forma responsable los residuos electrónicos 
                en chile, ofreciendo soluciones prácticas como puntos de reciclaje, servicios técnicos, 
                talleres educativos y un marketplace para dispositivos de segunda mano.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card 
            className="border-0 shadow-sm h-100"
            data-animate="true"
            id="mission"
          >
            <Card.Body className="p-4">
              <Target className="mb-3" size={28} style={{color: "#00A19B"}} />
              <h3 className="h4 mb-3">Misión</h3>
              <p className="text-muted mb-0">
                Promover la gestión responsable de residuos electrónicos en Viña del Mar, 
                fomentando prácticas de reciclaje, reparación y reutilización que reduzcan el impacto ambiental.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card 
            className="border-0 shadow-sm h-100"
            data-animate="true"
            id="vision"
          >
            <Card.Body className="p-4">
              <Eye className="mb-3" size={28} style={{color: "#00A19B"}} />
              <h3 className="h4 mb-3">Visión</h3>
              <p className="text-muted mb-0">
                Ser un referente en la transformación de los residuos electrónicos en oportunidades sostenibles, 
                estableciendo una cultura de cuidado ambiental y economía circular en Chile.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* How to Contribute */}
      <Container className="my-5 bg-light py-5">
        <Row>
          <Col className="text-center">
          <h2 className="text-center section-title mb-5">Unete a REvuelta</h2>
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
              <Button style={{backgroundColor: "#00A19B", borderColor: "#00A19B"}} className="me-3" onClick={() => navigate("/points")}>
                Encontrar Punto de Reciclaje
              </Button>
              <Button style={{
                    borderColor: "#00A19B",
                    backgroundColor: hover ? "#00A19B" : "inherit",
                    color: hover ? "white" : "#00A19B",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)} 
                onClick={() => navigate("/news")}>
                Participar en Taller
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutUs;