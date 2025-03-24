import 'bootstrap/dist/css/bootstrap.min.css';
import "./smart.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState,useEffect} from 'react';
import { getCartCount,increaseCartCount } from '../../Storage';


export default function Electricals() {
  const products = [
    { id: 1, title: "Smart Bulb", image: "/image/black1.jpg", description: "Energy-efficient smart bulb.", price: "20$" },
    { id: 2, title: "Smart Plug", image: "/image/black1.jpg", description: "Control your devices remotely.", price: "15$" },
    { id: 3, title: "Smart Thermostat", image: "/image/black1.jpg", description: "Save energy with smart temperature control.", price: "100$" },
    { id: 4, title: "Smart Camera", image: "/image/black1.jpg", description: "Keep your home secure.", price: "80$" }
  ];
  const[countProduct,setCountProduct]=useState(0);
  const handelAddProductToCart=()=>{
    increaseCartCount();
    setCountProduct(count=>count+1);
  };
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