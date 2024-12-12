import React from 'react';
import { Card, CardBody, CardText, CardImg } from 'react-bootstrap';

const News = () => {
  return (
    <Card className="h-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <CardImg
          variant="top"
          src="Img/thrash.jpg"
          alt="EE-avfall"
          className="transition-transform duration-300 hover:scale-110"
          style={{ height: '100%', objectFit: 'cover' }} 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 flex items-center justify-center">
          <h3 className="text-white font-bold text-xl">Hva skjer med EE-avfallet du gjenvinne?</h3>
        </div>
      </div>
      <CardBody>
        <CardText>
          Visste du at plasten i kjøleskapet ditt kan bli til bakplater til en PC-skjerm? Gjenvinning av EE-avfall innebærer omfattende prosesser. Her får du dem enkelt forklart.
        </CardText>
      </CardBody>
    </Card>
  );
};

export default News;