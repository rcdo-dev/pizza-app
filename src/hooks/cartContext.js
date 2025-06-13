import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Lista vazia para cartItems.

  const addToCart = (product) => {
    setCartItems((previousItems) => {
      const itemExists = previousItems.find((item) => item.id === product.id);

      if (itemExists) {
        // Atualiza a quantidade do item existente somando com a nova
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      // Se é um novo item, adiciona ao carrinho
      return [...previousItems, product];
    });
  };

  // Remove um produto do carrinho
  const removeFromCart = (product) => {
    setCartItems((previousItem) =>
      previousItem.filter((item) => item.id !== product.id)
    );
  };

  // Retorna o total $
  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Limpar o carrinho
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotal,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acessar o contexto
export const useCart = () => useContext(CartContext);
