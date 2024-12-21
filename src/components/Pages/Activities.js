import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Components/Title';

const NewsSection = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
`;

const NewsCard = styled(Card)`
  border: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }

  .card-img-container {
    overflow: hidden;
    position: relative;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
  }

  .card-img-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover .card-img-top {
    transform: scale(1.05);
  }
`;

const FeaturedNewsCard = styled(NewsCard)`
  .card-img-container {
    padding-top: 75%; /* 4:3 Aspect Ratio for featured */
  }
`;

const NewsTag = styled.span`
  background: ${props => props.color || '#17a2b8'};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const NewsDate = styled.span`
  color: #6c757d;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const NewsTitle = styled.h3`
  font-size: ${props => props.featured ? '1.75rem' : '1.25rem'};
  margin-bottom: 0.75rem;
  line-height: 1.4;
  
  a {
    color: #2c3e50;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #00A19B;
    }
  }
`;

const NewsExcerpt = styled.p`
  color: #6c757d;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Activities = () => {
  const news = [
    {
      id: 1,
      title: "Nueva Ley de Reciclaje Electrónico: Un Paso Hacia el Futuro Sostenible",
      excerpt: "Chile implementa normativas revolucionarias para la gestión de residuos electrónicos, estableciendo objetivos ambiciosos para los próximos años.",
      image: "Img/News/news2.png",
      date: "21 Dic 2024",
      tag: "Legislación",
      tagColor: "#e74c3c"
    },
    {
      id: 2,
      title: "Inauguración del Mayor Centro de Reciclaje en Viña del Mar",
      excerpt: "El nuevo centro de reciclaje electrónico abre sus puertas con tecnología de punta.",
      image: "Img/News/news1.webp",
      date: "20 Dic 2024",
      tag: "Local",
      tagColor: "#27ae60"
    },
    {
      id: 3,
      title: "Workshop: Reparación de Dispositivos Móviles",
      excerpt: "Aprende técnicas profesionales para reparar smartphones y tablets.",
      image: "Img/News/news3.jpg",
      date: "19 Dic 2024",
      tag: "Educación",
      tagColor: "#3498db"
    },
    // {
    //   id: 4,
    //   title: "Alianza Estratégica con Fabricantes de Electrónicos",
    //   excerpt: "Importantes marcas se unen a la iniciativa de reciclaje responsable.",
    //   image: "https://via.placeholder.com/400x300",
    //   date: "18 Dic 2024",
    //   tag: "Alianzas",
    //   tagColor: "#9b59b6"
    // }
  ];

  const featuredNews = news[0];
  const regularNews = news.slice(1);

  return (
  <>
    <NewsSection>
      <Container>
      <h2 className="text-center section-title mb-5">Últimas Noticias</h2>
        <Row className="g-4">
          {/* Featured News */}
          <Col lg={8}>
            <FeaturedNewsCard>
              <div className="card-img-container">
                <Card.Img variant="top" src={featuredNews.image} alt={featuredNews.title} />
              </div>
              <Card.Body>
                <NewsTag color={featuredNews.tagColor}>{featuredNews.tag}</NewsTag>
                <NewsDate>{featuredNews.date}</NewsDate>
                <NewsTitle featured>
                  <Link to="/news">{featuredNews.title}</Link>
                </NewsTitle>
                <NewsExcerpt>{featuredNews.excerpt}</NewsExcerpt>
              </Card.Body>
            </FeaturedNewsCard>
          </Col>

          {/* News Sidebar */}
          <Col lg={4}>
            <Row className="g-4">
              {regularNews.map(news => (
                <Col xs={12} key={news.id}>
                  <NewsCard>
                    <div className="card-img-container">
                      <Card.Img variant="top" src={news.image} alt={news.title} />
                    </div>
                    <Card.Body>
                      <NewsTag color={news.tagColor}>{news.tag}</NewsTag>
                      <NewsDate>{news.date}</NewsDate>
                      <NewsTitle>
                        <Link to="/news">{news.title}</Link>
                      </NewsTitle>
                      <NewsExcerpt>{news.excerpt}</NewsExcerpt>
                    </Card.Body>
                  </NewsCard>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center align-items-center mt-3">
      <Button
        className="px-4 py-2 border-0 shadow"
        style={{
          backgroundColor: "#00A19B",
          color: "white",
          borderRadius: "30px",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#0d8f8a";
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#00A19B";
          e.target.style.transform = "scale(1)";
        }}
      >
        Más Noticias
      </Button>
    </Container>
    </NewsSection>
    <h2 className="text-center section-title mb-5 mt-3">Actividades</h2>
    <Title />
    </>
  );
};

export default Activities;