import 'bootstrap/dist/css/bootstrap.min.css';
import "./smart.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState, useEffect } from 'react';
import { getCartCount, increaseCartCount } from '../../Storage';

const initialProducts = [
  { id: 1, title: "Black Jacket", image: "/image/Black Jacket.jpeg", description: "Stylish black jacket for winter.", price: "50$" },
  { id: 2, title: "Blue T-Shirt", image: "/image/black-tshirt.webp", description: "Comfortable blue t-shirt.", price: "50$" },
  { id: 3, title: "Red Hoodie", image: "/image/Red.webp", description: "Warm red hoodie for casual wear.", price: "50$" },
  { id: 4, title: "White Sneakers", image: "/image/White Sneakers.webp", description: "Trendy white sneakers.", price: "50$" }
];

export default function Clothes() {
  const [countProduct, setCountProduct] = useState(0);
  
  const handelAddProductToCart = () => {
    increaseCartCount();
    setCountProduct(count => count + 1);
  }

  useEffect(() => {
    setCountProduct(getCartCount());
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {initialProducts.map((product) => (
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
        {countProduct > 0 && (
          <i title='To Show Cart Should be Login First' className="bi bi-cart-plus">{countProduct}</i>
        )}
      </div>
    </div>
  );
}
