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
          marginTop: "-80px",
        }}>
        <div className="row d-flex align-items-center w-100">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <img className="black-store img-fluid rounded shadow-lg" src="/image/black1.jpg" alt="Store Image" 
              style={{
                width: "auto",
                height: "409px",
                maxWidth: "100%",
                backgroundSize: "cover",
                borderRadius: "15px",
                boxShadow: "0px 8px 16px rgba(0,0,0,0.3)", 
                transition: "transform 0.3s ease", 
              }} 
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

          <div className="col-12 col-md-6 text-start">
            <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem", textShadow: "2px 2px 5px rgba(255,255,255,0.5)" }}>
              Welcome to Black Store
            </h2>
            <p style={{ fontSize: "1.2rem", textShadow: "1px 1px 5px rgba(255,255,255,0.4)", lineHeight: "1.6" }}>
              At Black Store, we are passionate about providing high-quality products to our customers. 
              Whether you're looking for the latest gadgets, stylish clothes, or essential electronics, we've got you covered.
            </p>
            <p style={{ fontSize: "1.2rem", textShadow: "1px 1px 5px rgba(255,255,255,0.4)", lineHeight: "1.6" }}>
              Our mission is to make online shopping easy, enjoyable, and affordable for everyone. 
              We carefully select our products to ensure they meet the highest standards of quality and reliability.
            </p>
            <p style={{ fontSize: "1.2rem", textShadow: "1px 1px 5px rgba(255,255,255,0.4)", lineHeight: "1.6" }}>
              Thank you for choosing Black Store. We look forward to serving you and making your shopping experience unforgettable.
            </p>

            <button 
              className="btn btn-light mt-4 px-4 py-2 rounded-pill"
              onClick={() => navigate("/Login")}
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                border: "2px solid #fff",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "white"}
            >
              Log-in
            </button> 
          </div>
        </div>
    </div>
  );
}
