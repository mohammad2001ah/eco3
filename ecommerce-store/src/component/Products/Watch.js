import 'bootstrap/dist/css/bootstrap.min.css';
import "./smart.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState,useEffect } from 'react';
import { getCartCount,increaseCartCount } from '../../Storage';
export default function Watch() {
  const products = [
    { id: 1, title: "Apple Watch Series 7", image: "/image/Apple Watch Series 7.webp", description: "Stay connected and healthy.", price: "399$" },
    { id: 2, title: "Samsung Galaxy Watch 4", image: "/image/Samsung Galaxy Watch.webp", description: "Advanced health monitoring.", price: "349$" },
    { id: 3, title: "Fitbit Sense", image: "/image/Fitbit Sense.webp", description: "Track your health and fitness.", price: "299$" },
    { id: 4, title: "Garmin Forerunner 245", image: "/image/Garmin Forerunner 245.webp", description: "Perfect for runners.", price: "249$" }
  ];
  const[countProduct,setCountProduct]=useState(0);
  const handelAddProductToCart=()=>{
    increaseCartCount();
    setCountProduct(count=>count+1);
  }
  useEffect(()=>{
    setCountProduct(getCartCount());
  },[])
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img className="card-img-top" src={product.image} alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h5 className="card-title">{product.price}</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-dark w-100 d-flex align-items-center justify-content-center" onClick={handelAddProductToCart}>
                  <AddShoppingCartIcon className="me-2" /> Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {countProduct>0 &&(<i title='To Show Cart Should be Login First' className="bi bi-cart-plus">{countProduct}</i> )}
      </div>
    </div>
  );
}