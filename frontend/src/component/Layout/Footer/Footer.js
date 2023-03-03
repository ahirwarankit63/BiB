 import React from 'react'
 import appleStore from "../../../images/appleStore.png"
 import playStore from "../../../images/playStore.png"
 import logo from "../../../images/logo.png"
 import "./Footer.css"
 
 const Footer = () => {
   return (
        // <!-- Footer -->
 <footer id="footer">

{/* Left Footer */}
    <div className='leftFooter'>
        <h6>
            DOWNLOAD OUR APP 
        </h6>
        <p>For Android & IOS Device</p>
        <img className='playStoreImg' src={playStore} alt="playstore" />
        <img className='appleStoreImg' src={appleStore} alt="applestore" />
        
    </div>

{/* Mid Footer */}
    <div className='midFooter'>
    <h1>BookIBook</h1>
    <img className='bibLogo' src={logo} alt="logo" />
    <p>Be Educated And Feel Empowered</p>

    <p>Copyrights 2023 &copy; BookIBook</p>
    </div>


{/* Right Footer */}
    <div className='rightFooter'>

        <h4>
            Contact Us
        </h4>
        <a href='https://www.instagram.com/officialbookibook/'>
        <i class="bi bi-instagram"></i>
        </a>
        <a href='https://www.facebook.com/profile.php?id=100090514281512'>
        <i class="bi bi-facebook"></i>
        </a>
        <a href='fg'>
        <i class="bi bi-whatsapp"></i>
        </a>
        <a href='ff'>
        <i class="bi bi-youtube"></i>
        </a>
        <a href='dg'>
        <i class="bi bi-linkedin"></i>
        </a>
        <a href='mailto:bookibook@gmail.com?'>
        <i class="bi bi-envelope"></i>
        </a>

    </div>

 </footer>
    
   )
 }
 
 export default Footer