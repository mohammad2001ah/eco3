import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100 text-center"
        style={{
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
        }}>
        <div className="row d-flex align-items-center w-75">
        <div className="col-md-6 d-flex justify-content-center">
          <img className="black-store img-fluid rounded shadow" src="/image/black1.jpg" alt="Store Image" 
            style={{
              width: "auto",
              height:"409px",
              maxWidth: "100%",
              backgroundSize: "cover",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(255,255,255,0.2)",
              marginRight:"50px"
            }}/>
        </div>

        <div className="col-md-6 text-start mt-5">
          <h2 className="fw-bold">Welcome to Black Store</h2>
          <p style={{ fontSize: "1.2rem", textShadow: "1px 1px 3px rgba(255,255,255,0.4)" }}>
            At Black Store, we are passionate about providing high-quality products to our customers.
            Whether you're looking for the latest gadgets, stylish clothes, or essential electronics, we've got you covered.
          </p>
          <p style={{ fontSize: "1.2rem", textShadow: "1px 1px 3px rgba(255,255,255,0.4)" }}>
            Our mission is to make online shopping easy, enjoyable, and affordable for everyone. 
            We carefully select our products to ensure they meet the highest standards of quality and reliability.
          </p>
          <p style={{ fontSize: "1.2rem", textShadow: "1px 1px 3px rgba(255,255,255,0.4)" }}>
            Thank you for choosing Black Store. We look forward to serving you and making your shopping experience unforgettable.
          </p>

          <button 
            className="product"
            onClick={() => navigate("/Product")}
            style={{
              padding: "12px 30px",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
              borderRadius: "50px",
              fontSize: "1.3rem",
              outline: "none",
              border: "2px solid white",
              transition: "all 0.3s ease",
              fontWeight: "bold",
              boxShadow: "0px 4px 10px rgba(255,255,255,0.2)"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "black";
              e.target.style.color = "white";
              e.target.style.border = "2px solid white";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
              e.target.style.border = "2px solid white";
            }}
          >
            Shop Now
          </button> 
          <button 
            className="product"
            onClick={() => navigate("/Login")}
            style={{
              padding: "12px 30px",
              cursor: "pointer",
              color: "black",
              backgroundColor: "white",
              borderRadius: "50px",
              fontSize: "1.3rem",
              outline: "none",
              border: "2px solid white",
              transition: "all 0.3s ease",
              fontWeight: "bold",
              boxShadow: "0px 4px 10px rgba(255,255,255,0.2)",
              marginLeft:"25px"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "black";
              e.target.style.color = "white";
              e.target.style.border = "2px solid white";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
              e.target.style.border = "2px solid white";
            }}
          >
            Log-in
          </button> 
        </div>
      </div>

    </div>
  );
}
