import 'bootstrap/dist/css/bootstrap.min.css';
import "./smart.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Electricals() {
  const products = [
    { id: 1, title: "Smart Bulb", image: "/image/bulb.jpg", description: "Energy-efficient smart bulb.", price: "20$" },
    { id: 2, title: "Smart Plug", image: "/image/plug.jpg", description: "Control your devices remotely.", price: "15$" },
    { id: 3, title: "Smart Thermostat", image: "/image/thermostat.jpg", description: "Save energy with smart temperature control.", price: "100$" },
    { id: 4, title: "Smart Camera", image: "/image/camera.jpg", description: "Keep your home secure.", price: "80$" }
  ];

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