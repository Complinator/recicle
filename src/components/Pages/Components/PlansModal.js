import React from 'react';
import { Modal, Button, Card, Row, Col, Badge } from 'react-bootstrap';
import { Check, Crown, Shield, Star } from 'lucide-react';

const PremiumPlansModal = ({ show, onHide, onSelectPlan }) => {
  const plans = [
    {
      name: 'Premium Básico',
      price: '9.99€',
      period: 'mes',
      features: [
        'Acceso a contenido exclusivo',
        'Sin publicidad',
        'Soporte prioritario',
        '100 puntos de bonificación'
      ],
      icon: <Shield className="mb-3" size={30} color="#00A19B" />,
      color: '#00A19B'
    },
    {
      name: 'Premium Pro',
      price: '19.99€',
      period: 'mes',
      features: [
        'Todas las características básicas',
        'Descuentos especiales',
        'Acceso anticipado a eventos',
        '250 puntos de bonificación',
        'Insignia exclusiva de miembro'
      ],
      icon: <Crown className="mb-3" size={30} color="#FFD700" />,
      color: '#FFD700',
      recommended: true
    },
    {
      name: 'Premium Elite',
      price: '29.99€',
      period: 'mes',
      features: [
        'Todas las características Pro',
        'Servicio personalizado',
        'Eventos VIP',
        '500 puntos de bonificación',
        'Insignia elite personalizada',
        'Análisis detallado de reciclaje'
      ],
      icon: <Star className="mb-3" size={30} color="#FF4136" />,
      color: '#FF4136'
    }
  ];

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Planes Premium</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4">
        <Row className="g-4">
          {plans.map((plan, index) => (
            <Col key={index} xs={12} md={4}>
              <Card 
                className={`h-100 ${plan.recommended ? 'border-primary' : ''}`}
                style={{ 
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {plan.recommended && (
                  <div 
                    className="position-absolute top-0 start-50 translate-middle"
                    style={{ marginTop: '-10px' }}
                  >
                    <Badge bg="primary" className="px-3 py-2">Recomendado</Badge>
                  </div>
                )}
                <Card.Body className="d-flex flex-column text-center">
                  {plan.icon}
                  <h4>{plan.name}</h4>
                  <div className="mb-3">
                    <span className="h2">{plan.price}</span>
                    <span className="text-muted">/{plan.period}</span>
                  </div>
                  <div className="mt-auto">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="d-flex align-items-center mb-2">
                        <Check size={16} className="text-success me-2" />
                        <small>{feature}</small>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant={plan.recommended ? "primary" : "outline-primary"}
                    className="w-100 mt-4"
                    onClick={() => {
                      onSelectPlan(plan);
                      onHide();
                    }}
                  >
                    Seleccionar Plan
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PremiumPlansModal;