import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./smart.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const initialProducts = [
  { id: 1, title: "Black Jacket", image: "/image/black1.jpg", description: "Stylish black jacket for winter.", price: "50$" },
  { id: 2, title: "Blue T-Shirt", image: "/image/blue1.jpg", description: "Comfortable blue t-shirt.", price: "50$" },
  { id: 3, title: "Red Hoodie", image: "/image/red1.jpg", description: "Warm red hoodie for casual wear.", price: "50$" },
  { id: 4, title: "White Sneakers", image: "/image/shoes1.jpg", description: "Trendy white sneakers.", price: "50$" }
];
export default function Clothes() {
  const [products, setProducts] = useState(initialProducts);
  const [product, setProduct] = useState({
    title: "",
    image: "",
    description: "",
    price: ""
  });
  const handelNewProduct = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (product.title && product.image && product.description && product.price) {
      const newProduct = {
        id: products.length + 1,
        ...product
      };
      setProducts([...products, newProduct]);
      setProduct({ title: "", image: "", description: "", price: "" });
    } else {
      alert("Please fill all fields!");
    }
  };
  return (
    <div className="container mt-4">
      <form onSubmit={handleAddProduct} className="mb-4 p-3 border rounded">
        <h3>Add New Product</h3>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handelNewProduct}
            className="form-control"
            placeholder="Enter product title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handelNewProduct}
            className="form-control"
            placeholder="Enter image URL"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handelNewProduct}
            className="form-control"
            placeholder="Enter product description"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handelNewProduct}
            className="form-control"
            placeholder="Enter product price"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img className="card-img-top" src={product.image} alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h5 className="card-title">{product.price}</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-dark w-100 d-flex align-items-center justify-content-center">
                  <AddShoppingCartIcon className="me-2" /> Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}