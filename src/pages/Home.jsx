// import React from "react";
// import './Home.css'; // Make sure to create this CSS file

// export default function Home() {
//   return (
//     <div className="home-container">
      
//       {/* Left Section - Text Content */}
//       <div className="home-text">
//         <h2>Manufacturer of Chemical and Intermediates</h2>
//         <h1>ChemSafe</h1>
//         <h1>INDUSTRIES</h1>
//         <p>An emerging leader in Chemical Industry, is engaged in manufacturing and exporting dye intermediates and other chemical products. Our strength is in our in-depth product expertise, ability to quickly adapt to new markets, a wide range of product offerings and dedication to the environment and community.</p>
//       </div>

//       {/* Right Section - Image */}
//       <div className="home-image">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5TQWXOobDCxBvmrgFQqLQQhKkZRN1peflQ&s"
//           alt="ChemSafe"
//         />
//       </div>

//     </div>
//   );
// }


// import React from "react";
// import { FaQuoteLeft, FaEye, FaBullseye } from "react-icons/fa"; // Icons
// import './Home.css';

// export default function Home() {
//   return (
//     <div className="home-container-wrapper">

//       {/* Main Section */}
//       <div className="home-container">
//         <div className="home-text">
//           <h2>Manufacturer of Chemical and Intermediates</h2>
//           <h1>ChemSafe</h1>
//           <h1>INDUSTRIES</h1>
//           <p>An emerging leader in Chemical Industry, is engaged in manufacturing and exporting dye intermediates and other chemical products. Our strength is in our in-depth product expertise, ability to quickly adapt to new markets, a wide range of product offerings and dedication to the environment and community..</p>
//         </div>
//         <div className="home-image">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5TQWXOobDCxBvmrgFQqLQQhKkZRN1peflQ&s"
//             alt="ChemSafe Industries"
//           />
//         </div>
//       </div>

//       {/* Motto, Vision, Mission */}
//       <div className="home-values-section">
//         <div className="value-box fade-in">
//           <FaQuoteLeft className="value-icon" />
//           <h3>Motto</h3>
//           <p>“Safety, Purity, and Innovation in Every Drop.”</p>
//         </div>
//         <div className="value-box fade-in">
//           <FaEye className="value-icon" />
//           <h3>Vision</h3>
//           <p>To become a global leader in sustainable and innovative chemical manufacturing.</p>
//         </div>
//         <div className="value-box fade-in">
//           <FaBullseye className="value-icon" />
//           <h3>Mission</h3>
//           <p>Deliver high-quality chemical solutions with a focus on safety, efficiency, and customer trust.</p>
//         </div>
//       </div>

//     </div>
//   );
// }


import React, { useEffect } from "react";
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaShieldAlt, FaCheckCircle, FaHandshake, FaLightbulb, FaSmile } from "react-icons/fa"; 
// New icons
import { GiChemicalDrop, GiCrystalBars, GiFactory } from "react-icons/gi";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container-wrapper">

      {/* Hero Section */}
      <div className="home-container">
        <div className="home-text">
          <h2>Manufacturer of Chemical and Intermediates</h2>
          <h1>ChemSafe</h1>
          <h1>INDUSTRIES</h1>
          <p>An emerging leader in Chemical Industry, is engaged in manufacturing and exporting dye intermediates and other chemical products. Our strength is in our in-depth product expertise, ability to quickly adapt to new markets, a wide range of product offerings and dedication to the environment and community.</p>
        </div>
        <div className="home-image">
          <img
            src="chemfact.jpg"
            alt="ChemSafe Industries"
          />
        </div>
      </div>

      {/* Motto, Vision, Mission Section */}
      <div className="home-values-section">
        <div className="value-box" data-aos="fade-up">
          <GiChemicalDrop className="value-icon" />
          <h3>Motto</h3>
          <p>“Safety, Purity, and Innovation in Every Drop.”</p>
        </div>
        <div className="value-box" data-aos="fade-up" data-aos-delay="150">
          <GiCrystalBars className="value-icon" />
          <h3>Vision</h3>
          <p>To become a global leader in sustainable and innovative chemical manufacturing.</p>
        </div>
        <div className="value-box" data-aos="fade-up" data-aos-delay="300">
          <GiFactory className="value-icon" />
          <h3>Mission</h3>
          <p>Deliver high-quality chemical solutions with a focus on safety, efficiency, and customer trust.</p>
        </div>
      </div>


      <div className="Explore-products">
        <h3>Products</h3>
        <h1>EXPLORE OUR PRODUCTS</h1>
        {/* <h1>PRODUCTS</h1> */}
      </div>
      <div className="values-row-section">
  <div className="auto-scroll-wrapper">
    <div className="values-row-scroll">
      <div className="value-row-card" data-aos="fade-up" data-aos-delay="0">
        <FaShieldAlt className="row-icon" />
        <h4>Safety</h4>
        <p>Ensuring secure processes for our people and environment.</p>
      </div>
      <div className="value-row-card" data-aos="fade-up" data-aos-delay="1000">
        <FaCheckCircle className="row-icon" />
        <h4>Quality</h4>
        <p>Delivering excellence through consistent product standards.</p>
      </div>
      <div className="value-row-card" data-aos="fade-up" data-aos-delay="2000">
        <FaHandshake className="row-icon" />
        <h4>Integrity</h4>
        <p>Building trust through honesty and transparency in all actions.</p>
      </div>
      <div className="value-row-card" data-aos="fade-up" data-aos-delay="3000">
        <FaLightbulb className="row-icon" />
        <h4>Innovation</h4>
        <p>Driving progress with forward-thinking chemical solutions.</p>
      </div>
      <div className="value-row-card" data-aos="fade-up" data-aos-delay="4000">
        <FaSmile className="row-icon" />
        <h4>Customer Satisfaction</h4>
        <p>Fulfilling client needs with quality, reliability, and service.</p>
      </div>
    </div>
  </div>
</div>
{/* Call-to-Action Button */}
<div className="cta-section">
  <h1>GET IN TOUCH WITH US</h1>
  <h3>Send us a quick message</h3>
  <button
    className="cta-button"
    onClick={() => (window.location.href = "/contact")}
  >
    Contact Us
  </button>
</div>

<footer className="footer">
  <div className="footer-content">
    <div className="footer-section company-info">
      <img src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-b3a4-622f-bf6c-9d8dae4b2e5d/raw?se=2025-05-15T17%3A44%3A17Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-15T13%3A39%3A03Z&ske=2025-05-16T13%3A39%3A03Z&sks=b&skv=2024-08-04&sig=bpBq3kmH5bLVkbDS2xS%2B0KZbkz7ZfspwUHTy5wXNPv8%3D" alt="Alchemo Industries" className="logo" />
      <p>chemsafe.industries@gmail.com</p>
      <p>+91 9999999999</p>
    </div>

    <div className="footer-section quick-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/alerts">Product Expiry Alerts</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>

    <div className="footer-section address">
      <h3>Our Address</h3>
      <p><strong>Manufacturing Site & Registered Office:</strong><br />
        Bamnod 425503, Maharashtra</p>
      <p><strong>Head Office:</strong><br />
        Bamnod 425503, Maharashtra</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© Copyright 2025 ChemSafe Industries. All Rights Reserved</p>
    <p>Design & Developed by Dnyaneshwar Kolhe</p>
  </div>
</footer>
    </div>
  );
}
