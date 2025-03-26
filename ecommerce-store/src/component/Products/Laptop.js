import 'bootstrap/dist/css/bootstrap.min.css';
import "./smart.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState,useEffect } from 'react';
import { getCartCount,increaseCartCount } from '../../Storage';

export default function Laptop() {
  const products = [
    { id: 1, title: "MacBook Pro", image: "/image/MacBook Pro.jpeg", description: "Powerful laptop for professionals.", price: "1500$" },
    { id: 2, title: "Dell XPS", image: "/image/Dell XPS.webp", description: "Sleek and powerful.", price: "1200$" },
    { id: 3, title: "HP Spectre", image: "/image/HP Spectre.jpeg", description: "Elegant and lightweight.", price: "1300$" },
    { id: 4, title: "Lenovo ThinkPad", image: "/image/Lenovo ThinkPad.webp", description: "Durable and reliable.", price: "1100$" }
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