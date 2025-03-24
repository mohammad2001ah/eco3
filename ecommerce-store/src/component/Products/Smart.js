import 'bootstrap/dist/css/bootstrap.min.css';
import "./smart.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';

export default function Smart() {
  const products = [
    { id: 1, title: "iPhone 13", image: "/image/black1.jpg", description: "The latest iPhone with advanced features.", price: "999$" },
    { id: 2, title: "Samsung Galaxy S21", image: "/image/black1.jpg", description: "Powerful Android smartphone.", price: "899$" },
    { id: 3, title: "Google Pixel 6", image: "/image/black1.jpg", description: "Great camera and pure Android experience.", price: "799$" },
    { id: 4, title: "OnePlus 9", image: "/image/black1.jpg", description: "Fast and smooth performance.", price: "699$" }
  ];
  const[countProduct,setCountProduct]=useState(0);
  const handelAddProductToCart=()=>{
    setCountProduct(count=>count+1);
  }
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