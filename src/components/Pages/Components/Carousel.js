import React from 'react';
import { Carousel, Card, CardBody } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Bicycle from '../Figures/Bicycle';
import Batery from '../Figures/Batery';
import Globe from '../Figures/Globe';

const AnimatedIcon = ({ icon, color }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      className="d-flex justify-content-center mb-3"
    >
      <svg viewBox="0 0 100 100" fill={color} style={{ width: '80px', height: '80px' }}>
        {icon}
      </svg>
    </motion.div>
  );
};

const InfoCarousel = () => {

  const busIcon = (
    <>
      <path d="M30 30h40v40H30z" />
      <path d="M70 30h40v40H70z" />
    </>
  );

  const chipIcon = (
    <>
      <path d="M20 20h60v60H20z" />
      <path d="M30 30h40v40H30z" />
      <path d="M40 40h20v20H40z" />
    </>
  );

  const carouselItems = [
    [
      {
        Icon: Bicycle,
        title: "Aluminio recuperado",
        text: "10 289 toneladas de aluminio recuperado, equivalente a millones de sistemas de conducción."
      },
      {
        Icon: Batery,
        title: "Plomo reciclado",
        text: "3 735 toneladas de plomo reciclado, suficiente para fabricar 287 307 baterías."
      },
      {
        Icon: () => <AnimatedIcon icon={chipIcon} color="#4CAF50" />,
        title: "Oro recuperado",
        text: "16,2 kg de oro recuperado, equivalente a 64,8 toneladas de crédito de PC-er."
      }
    ],
    [
      {
        Icon: () => Globe,
        title: "Cable reciclado",
        text: "16 209 toneladas de cable reciclado, equivalente a dar cuatro vueltas alrededor del planeta."
      },
      {
        Icon: () => <AnimatedIcon icon={busIcon} color="#4CAF50" />,
        title: "Importancia del reciclaje",
        text: "Reciclar es fundamental para disminuir el volumen de residuos electrónicos en vertederos y promover la sostenibilidad."
      },
      {
        Icon: () => <AnimatedIcon icon={chipIcon} color="#4CAF50" />,
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
                  <div className="justify-content-center" style={{height: "50%", overflow: "hidden", margin: "auto 0"}}>
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