import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/CartPopUp.css";

export const CartPopup = ({ isVisible, onClose }) => {
  const {
    shoppingList,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
    calculateTotalQuantity,
    subtotal,
    discount,
    totalWithDiscount,
  } = useContext(CartContext);

  if (!isVisible) return null; // Si el popup no está visible, no se renderiza nada

  return (
    <div className="cart">
      {/* Contenedor con scroll donde se listan los productos */}
      <div
        id="cart-scroll-container"
        data-bs-spy="scroll"
        data-bs-target="#cart-nav"
        className="scroll-container"
        tabIndex="0"
      >
        <button className="x-btn" onClick={onClose}>
          X
        </button>

        {/*Si no hay productos muestra un mensaje*/}
        {shoppingList.length === 0 ? (
          <h5>Aún no ha agregado productos al carrito!!!</h5>
        ) : (
          <>
            <h3>Carrito de Compras</h3>
            <ul>
              {shoppingList.map((product) => (
                <div className="cart-product" key={product.id}>
                  <li>
                    <div className="image-container">
                      <img
                        className="cart-img"
                        src={product.imageURL}
                        alt={product.name}
                      />
                    </div>

                    <div className="title-container">
                      <strong>{product.name}</strong>
                    </div>
                    <div className="price-container">
                      {/* Total por producto */}
                      <p>
                        $
                        {(product.price * product.quantity).toLocaleString(
                          "en-US",
                          { maximumFractionDigits: 0 }
                        )}
                      </p>
                    </div>

                    <div className="counter-products">
                      <div>
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => decrementQuantity(product.id)}
                        >
                          -
                        </button>

                        <button className="btn btn-primary">
                          {product.quantity}
                        </button>

                        <button
                          className="btn btn-outline-primary"
                          onClick={() => incrementQuantity(product.id)}
                        >
                          +
                        </button>
                      </div>

                      <div className="delete-group">
                        <button
                          className="btn btn-danger"
                          onClick={() => removeProduct(product.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>

            {/* Mostrar el total de los productos en el carrito */}
            <div className="total-container">
              <p>
                Subtotal({calculateTotalQuantity()}):{" "}
                {subtotal.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0
                })}
              </p>
              <p>
                Descuento (5% a partir de $1,000,000):{" "}
                {discount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0
                })}
              </p>
              <h6>
                Total:{" "}
                {totalWithDiscount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0
                })}
              </h6>

              <div className="close-botton">
                <button className="btn btn-primary" onClick={onClose}>
                  Continuar compra
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
