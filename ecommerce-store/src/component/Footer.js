import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
function Footer() {
  return (
    <footer style={{backgroundColor:"#000"}} className="text-white pt-1 pb-2">
      <div className="container text-center">
        <div className="row text-center">
          <div className="col-12 mt-0">
            <h5 className="text-uppercase">balck Store</h5>
            <p style={{fontWeight:"bold"}}>Social Media</p>
            <div className='d-flex justify-content-center gap-3'>
              <FacebookIcon/>
              <InstagramIcon/>
              <XIcon/>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved - Your online store</p>
      </div>
    </footer>
  );
}

export default Footer;
