import React from 'react';
import { Carousel, Card, CardBody } from 'react-bootstrap';
import { Earth, Cpu, Bus, CircuitBoard, Battery, Bike } from 'lucide-react';

const InfoCarousel = () => {
  const carouselItems = [
    [
      {
        Icon: () => <Bike size={64} className="text-center mx-auto" />,
        title: "Aluminio recuperado",
        text: "10 289 toneladas de aluminio recuperado, equivalente a millones de sistemas de conducción."
      },
      {
        Icon: () => <Battery size={64} className="text-center mx-auto" />,
        title: "Plomo reciclado",
        text: "3 735 toneladas de plomo reciclado, suficiente para fabricar 287 307 baterías."
      },
      {
        Icon: () => <Cpu size={64} className="text-center mx-auto" />,
        title: "Oro recuperado",
        text: "16,2 kg de oro recuperado, equivalente a 64,8 toneladas de crédito de PC-er."
      }
    ],
    [
      {
        Icon: () => <Earth size={64} className="text-center mx-auto" />,
        title: "Cable reciclado",
        text: "16 209 toneladas de cable reciclado, equivalente a dar cuatro vueltas alrededor del planeta."
      },
      {
        Icon: () => <Bus size={64} className="text-center mx-auto" />,
        title: "Importancia del reciclaje",
        text: "Reciclar es fundamental para disminuir el volumen de residuos electrónicos en vertederos y promover la sostenibilidad."
      },
      {
        Icon: () => <CircuitBoard size={64} className="text-center mx-auto" />,
        title: "Descubre los puntos de reciclaje",
        text: "Localiza fácilmente los puntos de reciclaje y servicio técnico más cercanos a ti."
      }
    ]
  ];

  return (
    <Carousel 
      indicators={false} 
      interval={10000}
      controls={true}
      className="info-carousel"
    >
      {carouselItems.map((items, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex flex-wrap justify-content-center align-items-stretch">
            {items.map((item, itemIndex) => (
              <Card 
                key={itemIndex} 
                className="text-white m-2" 
                style={{ 
                  width: '18rem', 
                  backgroundColor: "#465A65", 
                  display: 'flex', 
                  flexDirection: 'column' 
                }}
              >
                <CardBody className="d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-center align-items-center" style={{height: "120px"}}>
                    <item.Icon />
                  </div>
                  <Card.Title className="text-center mb-3 mt-2" style={{ minHeight: '2rem' }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-center flex-grow-1 d-flex align-items-center justify-content-center">
                    {item.text}
                  </Card.Text>
                </CardBody>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default InfoCarousel;