import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <Container className="position-relative my-5">
      <Row>
        <Col md={8}>
          <Card className="bg-light border-0 p-4">
            <Card.Body>
              <h2 className="text-navy mb-4" style={{ color: '#002D5A' }}>
                Responsabilidad del productor reunida en un solo lugar
              </h2>
              <p className="mb-3">
              Manejamos la responsabilidad del productor para empresas que importan o fabrican productos eléctricos y baterías. El acuerdo con RENAS se puede ampliar con la membresía para embalaje.{' '}
                <Link to='/' className="text-decoration-none">Leer más</Link>
              </p>
              <div className="mt-4">
                <div className="mb-2">
                  <Link to='/' className="text-decoration-none d-block">
                    → Hazte miembro
                  </Link>
                </div>
                <div className="mb-2">
                <Link to='/' className="text-decoration-none d-block">
                    → ¿Recibió una carta de la Agencia Noruega de Medio Ambiente?
                    </Link>
                </div>
                <div className="mb-2">
                <Link to='/' className="text-decoration-none d-block">
                    → Devolución de residuos de EE
                    </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="position-relative d-none d-md-block">
          <img
            src="Img/thrash.jpg"
            alt="Bicycle"
            className="position-absolute"
            style={{
              top: '10%',
              right: '10%',
              maxWidth: '100%',
              height: '280px',
              zIndex: 2
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Title;