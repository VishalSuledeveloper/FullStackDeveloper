import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <p id="footerText">&copy; Developer Funnel</p>
            <hr/>
            <div className="footDiv">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <div className="footDiv">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <div className="footDiv noBorder">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <hr/>
            <center>
                <a href="www.facebook.com" target="_blank">
                    <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fb" className="slogo"/>
                </a>
                <a href="www.facebook.com" target="_blank">
                    <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb" className="slogo"/>
                </a>
                <a href="www.facebook.com" target="_blank">
                    <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb" className="slogo"/>
                </a>
            </center>
        </footer>
        
    )
}

export default Footer;