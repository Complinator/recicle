import React, { useState } from 'react';
import { Modal, Button, Card, Badge } from 'react-bootstrap';
import { useAuth } from '../../../context/Auth';
import PremiumPlansModal from './PlansModal';
import { Zap } from 'lucide-react';

export const UserProfile = ({ show, onHide }) => {
  const [showPremiumPlans, setShowPremiumPlans] = useState(false);
  const { currentUser, logout, updateSubscription } = useAuth();

  const handleLogout = () => {
    logout();
    onHide();
  };

  const handleSelectPlan = (plan) => {
    updateSubscription(plan.name);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Perfil de Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="border-0">
            <Card.Body>
              <div className="text-center mb-4">
                <div 
                  className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center" 
                  style={{ width: '80px', height: '80px', fontSize: '2rem' }}
                >
                  {currentUser?.name.charAt(0)}
                </div>
              </div>
              <h4 className="text-center mb-3">{currentUser?.name}</h4>
              <div className="mb-3">
                <strong>Correo:</strong> {currentUser?.email}
              </div>
              <div className="mb-3">
                <strong>Puntos:</strong> {currentUser?.points}
              </div>
              <div className="mb-4">
                <strong>Suscripción:</strong>{' '}
                <Badge 
                  bg={currentUser?.subscription.includes('Premium') ? 'primary' : 'secondary'}
                  className="ms-1"
                >
                  {currentUser?.subscription}
                </Badge>
              </div>
              {!currentUser?.subscription.includes('Premium') && (
                <Button 
                  variant="primary" 
                  className="w-100 mb-3"
                  onClick={() => setShowPremiumPlans(true)}
                >
                  <Zap size={16} className="me-2" />
                  Actualizar a Premium
                </Button>
              )}
              <Button 
                variant="outline-danger" 
                className="w-100"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </Button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      <PremiumPlansModal
        show={showPremiumPlans}
        onHide={() => setShowPremiumPlans(false)}
        onSelectPlan={handleSelectPlan}
      />
    </>
  );
};