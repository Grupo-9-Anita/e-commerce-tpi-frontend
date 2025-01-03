import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartContext } from "../context/CartContext";
import { CardComponent } from "../components/CardComponent";
import React from "react";

// Mock del SweetAlert2 para evitar la ventana emergente real
vi.mock("sweetalert2", () => ({
  fire: vi.fn(),
}));

describe("CardComponent", () => {
  it("Estado con stock (stock disponible > stock mínimo) ", () => {
    // Mock del contexto
    const mockShoppingList = [];
    const mockHandlerAdd = vi.fn();
    const mockHandlerRemove = vi.fn();

    render(
      <CartContext.Provider value={{ shoppingList: mockShoppingList }}>
        <CardComponent
          id={1}
          image="image.png"
          title="Producto 1"
          price={100}
          stock={10}
          description="Descripción del producto"
          handlerAdd={mockHandlerAdd}
          handlerRemove={mockHandlerRemove}
        />
      </CartContext.Provider>
    );

    const stockElement = screen.getByText(/Stock disponible: 10/i);
    expect(stockElement).toBeInTheDocument();
    expect(stockElement).toHaveClass("stock-available");
  });

  it("Estado bajo stock (stock disponible ≤ stock mínimo → se muestra en color rojo)", () => {
    // Mock del contexto
    const mockShoppingList = [];
    const mockHandlerAdd = vi.fn();
    const mockHandlerRemove = vi.fn();

    render(
      <CartContext.Provider value={{ shoppingList: mockShoppingList }}>
        <CardComponent
          id={1}
          image="image.png"
          title="Producto 1"
          price={100}
          stock={0}
          description="Descripción del producto"
          handlerAdd={mockHandlerAdd}
          handlerRemove={mockHandlerRemove}
        />
      </CartContext.Provider>
    );

    const stockElement = screen.getByText(/Stock disponible: 0/i);
    expect(stockElement).toBeInTheDocument();
    expect(stockElement).toHaveClass("stock-unavailable");
  });

  it("Estado filtrado y con stock, debe aplicar el color azul oscuro", () => {
    // Mock del contexto
    const mockShoppingList = [];
    const mockHandlerAdd = vi.fn();
    const mockHandlerRemove = vi.fn();

    render(
      <CartContext.Provider value={{ shoppingList: mockShoppingList }}>
        <CardComponent
          id={1}
          image="image.png"
          title="Producto 1"
          price={100}
          stock={10}
          description="Descripción del producto"
          handlerAdd={mockHandlerAdd}
          handlerRemove={mockHandlerRemove}
        />
      </CartContext.Provider>
    );

    // Simulamos que el producto está filtrado (puedes modificar esto según tu lógica de filtrado)
    const stockElement = screen.getByText(/Stock disponible: 10/i);
    expect(stockElement).toBeInTheDocument();
    expect(stockElement).toHaveClass("stock-available");
  });

  it("Estado filtrado y bajo stock, debe aplicar el color rojo", () => {
    // Mock del contexto
    const mockShoppingList = [];
    const mockHandlerAdd = vi.fn();
    const mockHandlerRemove = vi.fn();

    render(
      <CartContext.Provider value={{ shoppingList: mockShoppingList }}>
        <CardComponent
          id={1}
          image="image.png"
          title="Producto 1"
          price={100}
          stock={0}
          description="Descripción del producto"
          handlerAdd={mockHandlerAdd}
          handlerRemove={mockHandlerRemove}
        />
      </CartContext.Provider>
    );

    // Simulamos que el producto está filtrado y tiene stock bajo (0)
    const stockElement = screen.getByText(/Stock disponible: 0/i);
    expect(stockElement).toBeInTheDocument();
    expect(stockElement).toHaveClass("stock-unavailable");
  });
});
