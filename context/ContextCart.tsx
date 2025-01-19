"use client"

import { createContext, useReducer, ReactNode, useContext } from "react";

// Define Product type here
export interface Product {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  quantity: number;  // Make sure the quantity is part of the Product interface
}

// Alias CartItem to Product
export type CartItem = Product;  

// Define action types
type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: Product }
  | { type: "INCREMENT_QUANTITY"; payload: number }
  | { type: "DECREMENT_QUANTITY"; payload: number };

// Define the initial state
const initialState: Product[] = [];

// Cart reducer function
const cartReducer = (state: Product[], action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex > -1) {
        // Product already in cart, update quantity
        const updatedState = [...state];
        updatedState[existingProductIndex].quantity += 1;
        return updatedState;
      } else {
        // Add new product to cart
        return [...state, action.payload];
      }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    case "INCREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case "DECREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
};

// Create context
const CartContext = createContext<any>(null);

// Cart provider component
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for accessing the Cart context
export const useCart = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
