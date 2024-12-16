import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Counter from "./Components/Counter" // Assuming you have the Counter component
import { Link } from 'react-router-dom';
import "../../App.css"

const StyledSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const GradientCard = styled(Card)`
  background: white;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledTitle = styled.h2`
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: #3498db;
  }
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  
  svg {
    margin-right: 1rem;
    color: #3498db;
  }
`;

const FactCard = styled(motion.div)`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Info = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <StyledSection>
        <Container>
          <StyledTitle>Información sobre RAEE</StyledTitle>
          
          {/* Tips Section */}
          <Row className="mb-5">
            <Col lg={6}>
              <GradientCard className="mb-4">
                <Card.Body>
                  <Card.Title as="h3" className="mb-4">
                    Tips para Reducir y Manejar tus RAEE
                  </Card.Title>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconText>
                      🛠️ <strong>Repara antes de desechar:</strong> Busca un servicio técnico que extienda la vida útil de tu dispositivo.
                    </IconText>
                    <IconText>
                      ♻️ <strong>Recicla correctamente:</strong> Lleva tus residuos a puntos de reciclaje autorizados.
                    </IconText>
                    <IconText>
                      💡 <strong>Dona o vende dispositivos:</strong> Ofrécelos a alguien que los necesite a través del marketplace.
                    </IconText>
                    <IconText>
                      🔋 <strong>Maneja las baterías con cuidado:</strong> Nunca las tires en la basura común.
                    </IconText>
                  </motion.div>
                </Card.Body>
              </GradientCard>
            </Col>
            
            <Col lg={6}>
              <Counter />
            </Col>
          </Row>
          <StyledTitle>Información</StyledTitle>
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="bg-light shadow-sm card-hover-glow">
            <Row className="align-items-stretch">
              <Col lg={6}>
                <CardImg
                  src="Img/raee.jpg"
                  alt="RAEE Chile"
                  className="rounded-start card-img-dynamic"
                />
              </Col>
              <Col lg={6}>
                <CardBody>
                  <CardTitle className="font-bold text-3xl mb-4" style={{color:"#00A19B"}}>
                    Información sobre RAEE: Ley REP, tipos de residuos, y más. (Chile)
                  </CardTitle>
                  <CardText className="mb-4">
                    <strong>¿Qué son los RAEE?</strong> Los Residuos de Aparatos Eléctricos y Electrónicos (RAEE) son todos aquellos productos que han alcanzado el final de su vida útil y que contienen componentes electrónicos, eléctricos y otros materiales. Estos residuos deben ser gestionados de manera adecuada para evitar contaminar el medio ambiente y aprovechar los materiales que pueden ser reciclados.
                  </CardText>
                  <CardText className="mb-4">
                    <strong>Ley REP en Chile:</strong> En Chile, la Ley de Responsabilidad Extendida del Productor (Ley REP) regula la gestión de los RAEE. Esta ley establece que los productores e importadores de equipos eléctricos y electrónicos son responsables de recolectar y reciclar los residuos generados por sus productos al final de la vida útil.
                  </CardText>
                  <Link to='/' style={{color: "#8EC5C0"}} className="font-bold flex items-center transition-colors duration-500">
                    Más información
                  </Link>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col lg={10}>
          <Card className="bg-light shadow-sm card-hover-glow">
            <Row className="align-items-stretch">
              <Col lg={6} className="order-last order-lg-first">
                <CardBody>
                  <CardTitle className="font-bold text-3xl mb-4" style={{color:"#00A19B"}}>
                    Tipos de RAEE
                  </CardTitle>
                  <CardText className="mb-4">
                    <ul>
                      <li>Equipos de refrigeración y climatización (refrigeradores, aires acondicionados, etc.)</li>
                      <li>Pantallas, monitores y equipos con pantallas de más de 100 cm2</li>
                      <li>Lámparas</li>
                      <li>Equipos grandes (lavadoras, cocinas, hornos, etc.)</li>
                      <li>Equipos pequeños (aspiradoras, tostadoras, relojes, etc.)</li>
                      <li>Equipos de informática y telecomunicaciones (computadoras, impresoras, teléfonos, etc.)</li>
                      <li>Juguetes o equipos deportivos y de tiempo libre con componentes eléctricos y electrónicos</li>
                      <li>Instrumentos de vigilancia y control (termostatos, sensores, etc.)</li>
                      <li>Dispensadores automáticos</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Col>
              <Col lg={6}>
                <CardImg
                  src="Img/raeetypes.jpg"
                  alt="RAEE Types"
                  className="rounded-end card-img-dynamic"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col lg={10}>
          <Card className="bg-light shadow-sm card-hover-glow">
            <Row className="align-items-stretch">
            <Col lg={6}>
                <CardImg
                    src="Img/raeerecycling.jpg"
                    alt="RAEE Recycling"
                    className="rounded-end card-img-dynamic"
                />
            </Col>
              <Col lg={6} className="order-last order-lg-first">
                <CardBody>
                  <CardTitle className="font-bold text-3xl mb-4" style={{color:"#00A19B"}}>
                    Cómo se gestionan los RAEE en Chile
                  </CardTitle>
                  <CardText className="mb-4">
                    La gestión adecuada de los RAEE en Chile incluye los siguientes pasos:
                    <ol>
                      <li>Recolección y transporte: Los productores e importadores deben establecer puntos de recolección y transportar los RAEE a plantas de tratamiento.</li>
                      <li>Tratamiento y reciclaje: Los RAEE son desmantelados y los diferentes materiales (metales, plásticos, vidrio, etc.) son separados para su reciclaje.</li>
                      <li>Disposición final: Los materiales que no pueden ser reciclados se disponen de manera segura y ambientalmente responsable.</li>
                    </ol>
                  </CardText>
                  <Link to='/' className="font-bold flex items-center transition-colors duration-500" style={{color: "#8EC5C0"}}>
                    Más información
                  </Link>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

          {/* Facts Section */}
          <Row className="mb-5 mt-3">
            <Col>
              <StyledTitle>¿Sabías qué?</StyledTitle>
              <Row>
                {[
                  {
                    icon: "🌍",
                    fact: "El mundo genera 50 millones de toneladas de RAEE al año, equivalente al peso de 4,500 Torres Eiffel."
                  },
                  {
                    icon: "🇨🇱",
                    fact: "Chile es el segundo país de Latinoamérica que más residuos electrónicos genera per cápita."
                  },
                  {
                    icon: "📉",
                    fact: "Reciclar 1 millón de laptops puede ahorrar la energía equivalente al consumo de 3,500 hogares en un año."
                  }
                ].map((item, index) => (
                  <Col md={4} key={index}>
                    <FactCard
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <h3 className="mb-3">{item.icon}</h3>
                      <p className="mb-0">{item.fact}</p>
                    </FactCard>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* Guide Section */}
          <Row>
            <Col>
              <GradientCard>
                <Card.Body className="text-center">
                  <Card.Title as="h3" className="mb-4">
                    Descubre Nuestras Guías y Material Educativo
                  </Card.Title>
                  <p className="mb-4">
                    Aquí encontrarás toda la información necesaria para conocer tus dispositivos electrónicos,
                    sus materiales, componentes y tips para reconocer tus aparatos electrónicos para que puedas
                    gestionarlos correctamente.
                  </p>
                  <Button style={{
                                  borderColor: "#00A19B",
                                  backgroundColor: hover ? "#00A19B" : "inherit",
                                  color: hover ? "white" : "#00A19B",
                                  transition: "background-color 0.3s ease, color 0.3s ease",
                              }}
                              onMouseEnter={() => setHover(true)}
                              onMouseLeave={() => setHover(false)}>
                                  Acceder a las Guías
                                </Button>
                </Card.Body>
              </GradientCard>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </>
  );
};

export default Info;