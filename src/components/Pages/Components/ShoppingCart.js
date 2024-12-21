import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../../context/ShoppingCart';
import CartItem from './CartItem';

const ShoppingCartComp = () => {
    const { cartItems, getCartTotal } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
        <Button 
            variant="success" 
            className="mb-2 d-flex align-items-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
        >
            <ShoppingCart size={20} />
            <span>{totalItems}</span>
        </Button>
        
        {isOpen && (
            <Card className="shadow" style={{ width: '350px' }}>
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Carrito</h5>
                <Button variant="link" className="p-0" onClick={() => setIsOpen(false)}>×</Button>
            </Card.Header>
            <Card.Body>
                {cartItems.length === 0 ? (
                <p className="text-muted">No hay items en el carrito</p>
                ) : (
                <>
                    <div className="mb-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-3">
                    <strong>Total:</strong>
                    <strong>${getCartTotal().toLocaleString()} CLP</strong>
                    </div>
                    <Button variant="success" className="w-100">
                    Proceder al pago
                    </Button>
                </>
                )}
            </Card.Body>
            </Card>
        )}
        </div>
  );
};

export default ShoppingCartComp;