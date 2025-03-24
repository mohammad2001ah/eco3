import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function ContactUs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff', 
    borderRadius: '12px', 
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)', 
    p: 4,
    textAlign: 'center',
  };
  const handelSend=(e)=>{
    e.preventDefault();
    handleOpen();
    e.target.reset();
  }
  
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
                <strong>Phone:</strong> 06222555
              </p>
              <p>
                <strong>Email:</strong> info@blackstore.com
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={handelSend}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name or Email" required />
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
              <button  type="submit" className="btn btn-dark">Send Message</button>
            </form>
            <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2,color:"#333",fontSize:"1.3rem" }}>
            Thank you for reaching out. Your message has been successfully received. We will get back to you within 24 hours, dear customer
            </Typography>
          <Button className='okButton'onClick={handleClose}
            sx={{
              backgroundColor: '#000',
              color: 'white',
              padding: '10px 20px',
              fontSize: '1rem',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >OK</Button>
          </Box>
        </Modal>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}