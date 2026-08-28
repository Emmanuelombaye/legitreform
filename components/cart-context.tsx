"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Program } from "@/lib/content";

export type CartItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (program: Program) => void;
  remove: (id: string) => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return {
      items,
      open,
      setOpen,
      add: (program) => {
        setItems((current) => {
          const existing = current.find((item) => item.id === program.id);
          if (existing) {
            return current.map((item) =>
              item.id === program.id ? { ...item, quantity: item.quantity + 1 } : item,
            );
          }
          return [
            ...current,
            {
              id: program.id,
              name: program.name,
              category: program.category,
              price: program.price,
              quantity: 1,
            },
          ];
        });
        setOpen(true);
      },
      remove: (id) => setItems((current) => current.filter((item) => item.id !== id)),
      count,
      subtotal,
    };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
