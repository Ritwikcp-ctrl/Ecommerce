  import './header.css';
  import axios from 'axios';
  import './HomePage.css';
  import {products} from './Data/products.js';
  import {useEffect,useState} from 'react';
  
  export function HomePage() {

    const [oroducts,setProducts]=useState();

      useEffect(()=>{
        axios.get('http://localhost:3000/api/products')
         .then((response)=>{
           setProducts(response.data);
    });

  },[]);


    return (
<>
    <title>Ecommerce Project</title>

       <div className="handkart-header">
        <div className="handkart-left-section">
        <a href="handKart.html" className="header-link">
          <img className="handkart-logo"
            src="images/handkart-logo-white.png"></img>
          <img className="handkart-mobile-logo"
            src="images/handkart-mobile-logo-white.png"></img>
        </a>
      </div>
     

      <div className="handkart-header-middle-section">
        <input className="search-bar" type="text" placeholder="Search"></input>

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png"></img>
        </button>
      </div>

      <div className="handkart-header-right-section">
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
      <div className="products-grid">


        {products.map((product)=>{
          
          return (
              <div key={product.id}className="product-container">
          <div className="product-image-container">
               <img className='product-image 'src={product.image} alt="" />           
          </div>

          <div className="product-name limit-text-to-2-lines">
            {product.name}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={`images/ratings/rating-${product.rating.stars*10}.png`}></img>
            <div className="product-rating-count link-primary">
              {product.rating.count}
            </div>
          </div>

          <div className="product-price">
            ${(product.priceCents  /100).toFixed(2)}
          </div>

          <div className="product-quantity-container">
            <select>
              <option  value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png"></img>
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
          );
        })}

        {/* <div className="product-container">
          <div className="product-image-container">
               <img className='product-image 'src="images/products/athletic-cotton-socks-6-pairs.jpg" alt="" />           
          </div>

          <div className="product-name limit-text-to-2-lines">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src="images/ratings/rating-45.png"></img>
            <div className="product-rating-count link-primary">
              87
            </div>
          </div>

          <div className="product-price">
            $10.90
          </div>

          <div className="product-quantity-container">
            <select>
              <option  value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png"></img>
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div> */}


        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src="images/products/backpack.jpg"></img>
          </div>

          <div className="product-name limit-text-to-2-lines">
            BackPack-1
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src="images/ratings/rating-40.png"></img>
            <div className="product-rating-count link-primary">
              127
            </div>
          </div>

          <div className="product-price">
            $20.95
          </div>

          <div className="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png"></img>
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>


        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"></img>
          </div>

          <div className="product-name limit-text-to-2-lines">
            Adults Plain Cotton T-Shirt - 2 Pack
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src="images/ratings/rating-45.png"></img>
            <div className="product-rating-count link-primary">
              56
            </div>
          </div>

          <div className="product-price">
            $7.99
          </div>

          <div className="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png"></img>
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

         </div>
       </div>
          
      </>
 
       );
    }
