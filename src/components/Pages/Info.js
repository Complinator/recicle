import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'react-bootstrap';
import "../../App.css"
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <Container className="my-5">
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
                  <CardTitle className="text-primary font-bold text-3xl mb-4">
                    Información sobre RAEE: Ley REP, tipos de residuos, y más. (Chile)
                  </CardTitle>
                  <CardText className="mb-4">
                    <strong>¿Qué son los RAEE?</strong> Los Residuos de Aparatos Eléctricos y Electrónicos (RAEE) son todos aquellos productos que han alcanzado el final de su vida útil y que contienen componentes electrónicos, eléctricos y otros materiales. Estos residuos deben ser gestionados de manera adecuada para evitar contaminar el medio ambiente y aprovechar los materiales que pueden ser reciclados.
                  </CardText>
                  <CardText className="mb-4">
                    <strong>Ley REP en Chile:</strong> En Chile, la Ley de Responsabilidad Extendida del Productor (Ley REP) regula la gestión de los RAEE. Esta ley establece que los productores e importadores de equipos eléctricos y electrónicos son responsables de recolectar y reciclar los residuos generados por sus productos al final de la vida útil.
                  </CardText>
                  <Link to='/' className="text-primary font-bold flex items-center hover:text-primary-dark transition-colors duration-500">
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
                  <CardTitle className="text-primary font-bold text-3xl mb-4">
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
                  <CardTitle className="text-primary font-bold text-3xl mb-4">
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
                  <Link to='/' className="text-primary font-bold flex items-center hover:text-primary-dark transition-colors duration-500">
                    Más información
                  </Link>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
