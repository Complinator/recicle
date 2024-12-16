import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#00A19B', paddingTop: '40px', paddingBottom: '40px', position: 'relative', minHeight: '300px', marginTop: "7%" }}>
      {/* Windmills Container */}
      <div className="position-absolute" style={{ top: '-98px', right: '50px', zIndex: 1 }}>
        {/* First Windmill */}
        <div className="position-relative" style={{ width: '40px', height: '120px' }}>
          <div 
            className="position-absolute"
            style={{
              width: '4px',
              height: '80px',
              backgroundColor: '#8EC5C0',
              left: '50%',
              transform: 'translateX(-50%) translateY(22%)'
            }}
          />
          <div 
            className="position-absolute"
            style={{
              width: '40px',
              height: '40px',
              animation: 'rotate 8s linear infinite',
            }}
          >
            <div style={{
              width: '4px',
              height: '20px',
              backgroundColor: '#00A19B',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%) rotate(0deg)',
              transformOrigin: 'bottom'
            }} />
            <div style={{
              width: '4px',
              height: '20px',
              backgroundColor: '#00A19B',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%) rotate(120deg)',
              transformOrigin: 'bottom'
            }} />
            <div style={{
              width: '4px',
              height: '20px',
              backgroundColor: '#00A19B',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%) rotate(240deg)',
              transformOrigin: 'bottom'
            }} />
          </div>
        </div>

        {/* Second Windmill - Larger */}
        <div className="position-relative" style={{ width: '60px', height: '160px', marginLeft: '40px', marginTop: '-149px' }}>
          <div 
            className="position-absolute"
            style={{
              width: '6px',
              height: '100px',
              backgroundColor: '#8EC5C0',
              left: '50%',
              transform: 'translateX(-50%) translateY(27%)'
            }}
          />
          <div 
            className="position-absolute"
            style={{
              width: '60px',
              height: '60px',
              animation: 'rotate 10s linear infinite',
            }}
          >
            <div style={{
              width: '6px',
              height: '30px',
              backgroundColor: '#00A19B',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%) rotate(0deg)',
              transformOrigin: 'bottom'
            }} />
            <div style={{
              width: '6px',
              height: '30px',
              backgroundColor: '#00A19B',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%) rotate(120deg)',
              transformOrigin: 'bottom'
            }} />
            <div style={{
              width: '6px',
              height: '30px',
              backgroundColor: '#00A19B',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%) rotate(240deg)',
              transformOrigin: 'bottom'
            }} />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <Container className="text-center text-white">
        <Row className="justify-content-center mb-4">
          <Col xs="auto">
            <a href="tel:+56 9 9999 9999" className="text-white text-decoration-none">+56 9 9999 9999</a>
          </Col>
          <Col xs="auto">
            <a href="mailto:recicle@recicle.com" className="text-white text-decoration-none">recicle@recicle.com</a>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col xs="12" className="text-center">
            <p className="m-0">Viña Del Mar, Chile</p>
            <p className="m-0">Habana 345, Recreo</p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col xs="auto">
            <p className="h5 mb-3">Síguenos</p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to='/' className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </Link>
              <Link to='/' className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </Link>
              <Link to='/' className="text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <Link to='/' className="text-white text-decoration-none">Política de privacidad & cookies</Link>
              <Link to='/' className="text-white text-decoration-none">Prensa</Link>
              <Link to='/points' className="text-white text-decoration-none">Encontrar punto de retorno</Link>
              <Link to='/info' className="text-white text-decoration-none">Informes ambientales</Link>
            </div>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .windmill-pole {
            width: 2px;
            height: 60px;
            background-color: #87CEEB;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          .windmill-pole.large {
            width: 3px;
            height: 100px;
          }

          .windmill-head {
            width: 20px;
            height: 20px;
            position: absolute;
            animation: rotate 8s linear infinite;
          }

          .windmill-head.large {
            width: 30px;
            height: 30px;
            animation: rotate 10s linear infinite;
          }

          .windmill-blade {
            width: 2px;
            height: 10px;
            background-color: #87CEEB;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            transform-origin: bottom center;
          }

          .windmill-blade.large {
            width: 3px;
            height: 15px;
          }

          .windmill-blade.rotated {
            transform: translateX(-50%) rotate(45deg);
          }

          footer a:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;