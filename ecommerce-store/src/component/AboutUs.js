import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; // يمكنك إنشاء ملف CSS خاص بصفحة About Us

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="container">
        <h1 className="text-center mb-5 mt-4">About Us</h1>
        <div className="row">
          <div className="col-md-6">
            <img
              src="/image/AboutUs.jpg"
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>Welcome to Black Store</h2>
            <p className="lead">
              At Black Store, we are passionate about providing high-quality products to our customers. 
              Whether you're looking for the latest gadgets, stylish clothes, or essential electricals, 
              we've got you covered.
            </p>
            <p>
              Our mission is to make online shopping easy, enjoyable, and affordable for everyone. 
              We carefully select our products to ensure they meet the highest standards of quality and reliability.
            </p>
            <p>
              Thank you for choosing Black Store. We look forward to serving you and making your shopping 
              experience unforgettable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}