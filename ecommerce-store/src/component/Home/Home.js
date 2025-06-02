import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center  text-white text-center px-3"
      style={{
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight:"100vh",
        marginTop:"-42px"
      }}
    >
      <div className="row w-100 align-items-center g-4">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            src="/image/black1.jpg"
            alt="Store"
            className="img-fluid rounded shadow"
            style={{
              width: "100%",
              maxWidth: "500px",
              objectFit: "cover",
              borderRadius: "15px",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        
        <div className="col-12 col-md-6 text-md-start text-center">
          <h2 className="fw-bold mb-3 display-5 text-shadow">
            Welcome to Black Store
          </h2>
          <p className=" lh-lg text-shadow">
            At Black Store, we are passionate about providing high-quality products
            to our customers. Whether you're looking for the latest gadgets,
            stylish clothes, or essential electronics — we've got you covered.
          </p>
          <p className=" lh-lg text-shadow">
            Our mission is to make online shopping easy, enjoyable, and affordable
            for everyone. We carefully select our products to meet high standards.
          </p>
          <p className=" lh-lg text-shadow">
            Thank you for choosing Black Store. We look forward to serving you.
          </p>

          <button
            className="btn btn-light mt-4 px-4 py-2 rounded-pill fw-bold"
            onClick={() => navigate("/Login")}
            style={{
              fontSize: "1.2rem",
              border: "2px solid #fff",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            Log-in
          </button>
        </div>
      </div>
    </div>
  );
}
