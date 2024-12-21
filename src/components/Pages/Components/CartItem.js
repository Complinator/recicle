import React from 'react';
import { Button } from 'react-bootstrap';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../../../context/ShoppingCart';

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useCart();
  
    return (
      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <div className="flex-grow-1">
          <p className="mb-0 fw-medium">{item.title}</p>
          <small className="text-success">{item.price}</small>
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center border rounded">
            <Button 
              variant="link" 
              className="p-1 text-decoration-none"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <Minus size={14} />
            </Button>
            <span className="px-2">{item.quantity}</span>
            <Button 
              variant="link" 
              className="p-1 text-decoration-none"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus size={14} />
            </Button>
          </div>
          <Button 
            variant="outline-danger" 
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            ×
          </Button>
        </div>
      </div>
    );
};

export default CartItem;