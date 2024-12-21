import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../../App.css";

// Add these styles to your App.css file
const styles = `
.info-carousel .carousel-indicators {
  bottom: -50px;
}

.info-carousel .carousel-indicators [data-bs-target] {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #002D5A;
  opacity: 0.5;
}

.info-carousel .carousel-indicators .active {
  opacity: 1;
}

.description-text {
  text-align: justify;
  text-justify: inter-word;
}
`;

const Title = () => {
  const carouselItems = [
    {
      title: "Feria Reusa",
      description: `¡Próxima edición en enero! Postulaciones próximamente. ♻️ REUSA: ¡Imperdible! Más de 20 expositoras con ropa en excelente estado. Encuentra tu tenida ideal para estas fiestas. Vestuario infantil, accesorios, y más. ♻️ ¡REusemos y demos una segunda vida a la ropa! Evento con áreas verdes para disfrutar en familia. 🚗 Estacionamientos, seguridad, foodtruck, cafetería, juegos inflables gratuitos. 👍 ENTRADA LIBERADA. Te esperamos en el club. 📅 Sábado 14 de diciembre de 11:00 a 19:00 hrs. 📍 Avda Jorge Montt 12.100 (Frente a playa las Salinas).`,
      links: [
        "Hazte miembro",
        "Consulta sobre como reciclar tus desechos",
        "Devolución de residuos de EE"
      ],
      image: "Img/Activities/act1.jpg",
    },
    {
      title: "3ª Feria Ambiental de Viña del Mar",
      description: "¡Ven a la 3ª Feria Ambiental en Viña del Mar! 🌿🌍 Descubre sobre cambio climático, biodiversidad, y gestión de residuos. 🌟 Del 30 de septiembre al 2 de octubre en el parque de la Quinta Vergara. 🍃 Charlas, talleres, y más actividades para toda la familia. 🎉 ¡Únete a generar conciencia ambiental! 🌺🌳 Entrada libre. ¡Te esperamos! 🌞 #FeriaAmbientalViña2024",
      links: [
        "Encuentra un taller cercano",
        "Guías de reparación",
        "Compra repuestos certificados"
      ],
      image: "Img/Activities/act2.jpg",
    },
    {
      title: "Feria Sostenible PUCV en Campus Sausalito",
      description: "El viernes 20 de octubre, entre las 12 y 14.30 horas, se realizará la Feria Sostenible PUCV organizada por la Dirección de Vinculación Social y Sostenibilidad y la Unidad de Gestión Ambiental de nuestra universidad en el Campus Sausalito (Avenida El Bosque 1290, Viña del Mar). En la oportunidad, se realizará un taller de recuperación textil, reciclaje de aparatos eléctricos y electrónicos, exposición de voluntariados sociales y ambientales, y una expo de Alumni PUCV.",
      links: [
        "Localiza puntos de recolección",
        "Guía de reciclaje de baterías",
        "Programa de recompensas"
      ],
      image: "Img/Activities/act3.jpg",
    }
  ];

  return (
    <Container className="position-relative my-5">
      <style>{styles}</style>
      <Carousel interval={5000} controls={false} indicators={true} className='info-carousel'>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <Row>
              <Col md={8}>
                <Card className="bg-light border-0 p-4" style={{height: "350px"}}>
                  <Card.Body>
                    <h2 className="text-navy mb-4" style={{ color: '#002D5A' }}>
                      {item.title}
                    </h2>
                    <p className="mb-3 mx-5 description-text">
                      {item.description}{' '}
                      <Link to="/" className="text-decoration-none">
                        Leer más
                      </Link>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="position-relative d-none d-md-block">
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="position-absolute"
                  style={{
                    top: '10%',
                    right: '15%',
                    width: '100%',
                    height: '280px',
                    zIndex: 2
                  }}
                />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Title;