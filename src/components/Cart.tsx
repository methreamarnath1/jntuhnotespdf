import React from 'react';
import { CartItem } from '../types';
import { X, ShoppingCart as CartIcon } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onRemoveFromCart: (bookId: string) => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemoveFromCart }) => {
  const total = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <CartIcon size={24} />
        <h2 className="text-xl font-semibold">Your Cart</h2>
      </div>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.book.id} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{item.book.title}</h3>
                  <p className="text-sm text-gray-600">
                    ${item.book.price} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.book.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};