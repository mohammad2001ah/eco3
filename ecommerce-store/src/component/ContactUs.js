import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css'; // يمكنك إنشاء ملف CSS خاص بصفحة Contact Us

export default function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="container">
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="row">
          <div className="col-md-6">
            <h2>Get in Touch</h2>
            <p className="lead">
              We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, 
              feel free to reach out to us.
            </p>
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p>
                <strong>Address:</strong> 123 Black Store Street, City, Country
              </p>
              <p>
                <strong>Phone:</strong> +123 456 7890
              </p>
              <p>
                <strong>Email:</strong> info@blackstore.com
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your Cell Phone"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number (e.g., 1234567890)"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required />
              </div>
              <button type="submit" className="btn btn-dark">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}