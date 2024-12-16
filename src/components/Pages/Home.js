import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MapPin, Recycle, BookOpen, ShoppingCart } from 'lucide-react';
import "../../App.css";
import Chart from './Components/Chart';

const Home = () => {
  const [hover, setHover] = useState(false);
  
  const [news] = useState([
    {
      title: "Nueva ley de reciclaje electrónico en Chile",
      date: "15 Dic 2024",
      description: "Se implementan nuevas regulaciones para la gestión de RAEE...",
      tag: "Legislación"
    },
    {
      title: "Inauguración de punto de reciclaje en Viña del Mar",
      date: "10 Dic 2024",
      description: "Nuevo punto de recolección de residuos electrónicos...",
      tag: "Local"
    },
    {
      title: "Taller gratuito de reparación de celulares",
      date: "5 Dic 2024",
      description: "Aprende a dar mantenimiento básico a tu dispositivo...",
      tag: "Educación"
    }
  ]);

  return (
    <div className="home-container">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideIn {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .hero-section {
            background: linear-gradient(135deg, #00A19B 0%, #008B85 100%);
            padding: 6rem 0;
            animation: fadeIn 1s ease-out;
          }

          .stat-card {
            animation: fadeIn 0.8s ease-out;
            transition: transform 0.3s ease;
          }

          .stat-card:hover {
            transform: translateY(-10px);
          }

          .news-card {
            animation: slideIn 0.8s ease-out;
            transition: all 0.3s ease;
            border: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }

          .news-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }

          .floating-icon {
            animation: float 3s ease-in-out infinite;
          }

          .action-button {
            transition: all 0.3s ease;
          }

          .action-button:hover {
            transform: scale(1.05);
          }

          .testimonial-card {
            transition: all 0.3s ease;
          }

          .testimonial-card:hover {
            transform: scale(1.02);
          }

          .statistics-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: #00A19B;
            animation: fadeIn 1s ease-out;
          }

          .section-title {
            position: relative;
            padding-bottom: 15px;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background-color: #00A19B;
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="hero-section text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="display-4 mb-4">¡Transformemos residuos electrónicos en oportunidades!</h1>
              <p className="lead mb-4">
                Promovemos el reciclaje, reparación y reutilización de dispositivos electrónicos 
                para reducir el impacto ambiental y fomentar la economía circular
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button className="action-button" variant="light" as={Link} to="/puntos-reciclaje">
                  Encuentra un Punto de Reciclaje
                </Button>
                <Button className="action-button" variant="outline-light" as={Link} to="/talleres">
                  Explora Talleres
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Problem Overview */}
      <Container className="my-5">
      <h2 className="text-center section-title mb-5">Problema</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <Card className="border-0">
              <Card.Body>
                <Card.Title className="h2 mb-4">El Problema de los Residuos Electrónicos</Card.Title>
                <Card.Text>
                  Cada año, toneladas de dispositivos electrónicos terminan en vertederos, 
                  liberando toxinas al medio ambiente y desperdiciando recursos valiosos 
                  como metales preciosos. Chile no es ajeno a esta problemática.
                </Card.Text>
                <div className="d-flex justify-content-between mt-4">
                  <div className="text-center">
                    <h3 className="text-primary">180,000+</h3>
                    <p>Toneladas de RAEE anuales</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-warning">10%</h3>
                    <p>Reciclados adecuadamente</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            {/* Placeholder for interactive graphic */}
            <Chart />
          </Col>
        </Row>
      </Container>

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
              <Button style={{backgroundColor: "#00A19B", borderColor: "#00A19B"}} className="me-3">
                Encontrar Punto de Reciclaje
              </Button>
              <Button style={{
                borderColor: "#00A19B",
                backgroundColor: hover ? "#00A19B" : "inherit",
                color: hover ? "white" : "#00A19B",
                transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
                Participar en Taller
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Estadísticas */}
      <Container className="my-5">
        <h2 className="text-center section-title mb-5">Nuestro Impacto</h2>
        <Row>
          {[
            { number: "180,000+", text: "Toneladas de RAEE anuales", icon: "🌍" },
            { number: "10%", text: "Reciclados adecuadamente", icon: "⚙️" },
            { number: "70%", text: "Reducción de emisiones", icon: "💡" }
          ].map((stat, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="stat-card h-100 text-center border-0">
                <Card.Body>
                  <div className="floating-icon display-4 mb-3">{stat.icon}</div>
                  <div className="statistics-number">{stat.number}</div>
                  <p className="text-muted">{stat.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Noticias */}
      <Container className="my-5">
        <h2 className="text-center section-title mb-5">Últimas Noticias</h2>
        <Row>
          {news.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="news-card mb-4" style={{animationDelay: `${index * 0.2}s`}}>
                <Card.Body>
                  <small className="text-muted">{item.date}</small>
                  <Card.Title className="my-2">{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Badge bg="info">{item.tag}</Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonios */}
      <Container className="my-5">
        <h2 className="text-center section-title mb-5">Historias que Inspiran</h2>
        <Carousel>
          <Carousel.Item>
            <Card className="testimonial-card text-center border-0">
              <Card.Body>
                <Card.Text className="fst-italic mb-3">
                  "Desde que conocí Revuelta de RAEE, he logrado reducir 
                  significativamente los electrónicos que desecho. ¡Es una 
                  iniciativa transformadora!"
                </Card.Text>
                <Card.Footer className="bg-transparent border-0">
                  — Claudia P., Viña del Mar
                </Card.Footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="testimonial-card text-center border-0">
              <Card.Body>
                <Card.Text className="fst-italic mb-3">
                  "Reparé mi laptop en uno de los servicios técnicos 
                  recomendados por la campaña. ¡Gracias por el apoyo!"
                </Card.Text>
                <Card.Footer className="bg-transparent border-0">
                  — Matías R., Valparaíso
                </Card.Footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Home;