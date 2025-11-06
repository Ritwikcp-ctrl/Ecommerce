import React from 'react'
import './orderPage.css'
import './header.css';

 export const OrderPage = () => {
  return (
    <>
    <title>Orders</title>
    <div className="amazon-header">
      <div className="amazon-header-left-section">
        <a href="amazon.html" className="header-link">
          <img className="amazon-logo"
            src="images/handkart-logo-white.png"></img>
          <img className="amazon-mobile-logo"
            src="images/handkart-mobile-logo-white.png"></img>
        </a>
      </div>

      <div className="amazon-header-middle-section">
        <input className="search-bar" type="text" placeholder="Search"></input>

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png"></img>
        </button>
      </div>

      <div className="amazon-header-right-section">
        <a className="orders-link header-link" href="orders.html">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a className="cart-link header-link" href="checkout.html">
          <img className="cart-icon" src="images/icons/cart-icon.png"></img>
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>
    </div>

    <div className="main">
      <div className="page-title">Your Orders</div>

      <div className="orders-grid">
        <div className="order-container">
          
          <div className="order-header">
            <div className="order-header-left-section">
              <div className="order-date">
                <div className="order-header-label">Order Placed:</div>
                <div>August 12</div>
              </div>
              <div className="order-total">
                <div className="order-header-label">Total:</div>
                <div>$35.06</div>
              </div>
            </div>

            <div className="order-header-right-section">
              <div className="order-header-label">Order ID:</div>
              <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
            </div>
          </div>

          <div className="order-details-grid">
            <div className="product-image-container">
              <img src="images/products/athletic-cotton-socks-6-pairs.jpg"></img>
            </div>

            <div className="product-details">
              <div className="product-name">
                Black and Gray Athletic Cotton Socks - 6 Pairs
              </div>
              <div className="product-delivery-date">
                Arriving on: August 15
              </div>
              <div className="product-quantity">
                Quantity: 1
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src="images/icons/buy-again.png"></img>
                <span className="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div className="product-actions">
              <a href="tracking.html">
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>

            <div className="product-image-container">
              <img src="images/products/backpack.jpg"></img>
            </div>

            <div className="product-details">
              <div className="product-name">
                Adults Plain Cotton T-Shirt - 2 Pack
              </div>
              <div className="product-delivery-date">
                Arriving on: August 19
              </div>
              <div className="product-quantity">
                Quantity: 2
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src="images/icons/buy-again.png"></img>
                <span className="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div className="product-actions">
              <a href="tracking.html">
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="order-container">

          <div className="order-header">
            <div className="order-header-left-section">
              <div className="order-date">
                <div className="order-header-label">Order Placed:</div>
                <div>June 10</div>
              </div>
              <div className="order-total">
                <div className="order-header-label">Total:</div>
                <div>$41.90</div>
              </div>
            </div>

            <div className="order-header-right-section">
              <div className="order-header-label">Order ID:</div>
              <div>b6b6c212-d30e-4d4a-805d-90b52ce6b37d</div>
            </div>
          </div>

          <div className="order-details-grid">
            <div className="product-image-container">
              <img src="images/products/backpack.jpg"></img>
            </div>

            <div className="product-details">
              <div className="product-name">
                Intermediate Size Basketball
              </div>
              <div className="product-delivery-date">
                Arriving on: June 17
              </div>
              <div className="product-quantity">
                Quantity: 2
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src="images/icons/buy-again.png"></img>
                <span className="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div className="product-actions">
              <a href="tracking.html">
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

