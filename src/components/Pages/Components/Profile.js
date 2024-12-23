import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import { useAuth } from '../../../context/Auth';

export const UserProfile = ({ show, onHide }) => {
  const { currentUser, logout, updateSubscription } = useAuth();

  const handleSubscribe = () => {
    updateSubscription('premium');
    // En una aplicación real, aquí iría la lógica de pago
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Perfil de Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="border-0">
          <Card.Body>
            <div className="text-center mb-4">
              <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center" 
                   style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
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
              <strong>Suscripción:</strong> {currentUser?.subscription}
            </div>
            {currentUser?.subscription === 'básica' && (
              <Button 
                variant="success" 
                className="w-100 mb-3"
                onClick={handleSubscribe}
              >
                Actualizar a Premium
              </Button>
            )}
            <Button 
              variant="outline-danger" 
              className="w-100"
              onClick={logout}
            >
              Cerrar Sesión
            </Button>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};