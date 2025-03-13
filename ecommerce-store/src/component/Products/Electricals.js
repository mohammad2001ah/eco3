import 'bootstrap/dist/css/bootstrap.min.css';
import "./smart.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Electricals() {
  return (
    <div className="cards-container">
      {[...Array(10)].map((_, index) => (
        <div className="card" key={index}>
          <img className="card-img-top" src="/image/black1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn btn-dark">Add To Cart</a>
          </div>
        </div>
      ))}
    </div>
  );
}
