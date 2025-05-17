// function About() {
//     return (
//       <div>
//         <h1>About ShreeNova Industries</h1>
//         <p>We are a leading supplier of industrial chemicals ensuring safety and compliance.</p>
//       </div>
//     );
//   }
  
//   export default About;
  
// import React from "react";
// import './About.css'; // Import the CSS file

// const About = () => {
//   return (
//     <div className="about-container">
      
//       {/* Image Section */}
//       <div className="about-image">
//         <img
//           src="https://www.phxequip.com/Multimedia/images/plant/thumbnail/nitric-acid-plant-500-stpd-2887.jpg"
//           alt="About Us"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="about-text">
//         <h2>ChemSafe Industries</h2>
//         <h3>The First Fuel Saver of India
//         Save Fuel, Save Nature, Save Money</h3>
//         <p>
//         Shreeniwas Innovations Pvt. Ltd. was started by Mr. Deepak Rane in the year 2010. With lot of research and hard work starting from 2003, Shreeniwas Innovations was born. Mr. Deepak Rane is a nature lover and so was interested in doing something that would save the environment from pollution. He took the help of Ayurveda and under his father’s Mr. Prakash Rane’s guidance started working on the development of Bio Additives and clean Bio Fuel production. After the immense research of 3 years helped Mr. Rane to invent the basic formulation of Petrol and Diesel additive that saved the fuel up to 40% and also increased the life of engines and other parts related to it. The perfect formula was invented after multiple experiments and it was ready to be introduced in the market in the year 2009.
//         </p>
//         <p>
//         Mr. Rane still continues doing research daily to manufacture more products for conserving our economical fuel for the country’s growth. He wants to set a global trade mark in every country's economical fuel conservation and reduce the carbon footprint by boosting ‘Green Foot Print’ globally.
//         </p>
//         <p>
//         The company now serves Auto and Industrial Lubricating oils and greases. Today, they have dealers and distributor network throughout Maharashtra and Goa. Also, they have their distributors in many other states of India.
//         In 2013, Mr. Rane invented the manufacturing process of Biofuel with the help of waste plastic. This process turns waste plastic into Biofuel as well as is highly filtered to be used by the consumers and large scale industries.
//         </p>
//       </div>

//     </div>
//   );
// };

// export default About;

import React from "react";
import "./About.css";
import { motion } from "framer-motion";

// Dummy header
// const Header = () => (
//   <header className="site-header">
//     <h1>Alchemo Industries</h1>
//   </header>
// );

// // Dummy footer
// const Footer = () => (
//   <footer className="site-footer">
//     <p>© 2025 Alchemo Industries. All rights reserved.</p>
//   </footer>
// );

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* <Header /> */}

      <div className="about-wrapper">
        {/* Text Section */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4>How we started</h4>
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, cumque ratione. Culpa, velit natus! Iure magni minima quo sequi delectus nostrum explicabo earum officiis, ex aperiam vitae maxime saepe perspiciatis eius harum veritatis nesciunt neque, quae labore velit? Illum labore, error voluptatum ipsum vel perspiciatis cum maiores sint temporibus laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi earum nemo delectus facere beatae omnis culpa tenetur unde vitae!
          </p>
          <p>
            
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="officedesk.jpg" alt="Office" />
        </motion.div>
      </div>

      {/* Vision / Mission / Value Section */}
      <div className="vmv-section">
        {/* Image on Left */}
        <motion.div
          className="vmv-image"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src='girlchem.jpg'
            alt="Lab Work"
          />
        </motion.div>

        {/* Text on Right */}
        <motion.div
          className="vmv-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>VISION</h2>
          <p>
            To emerge as a global producer of Intermediates used in the Manufacture of Pharmaceuticals,
            Dyes, Agrochemicals, Specialty Chemicals, etc.
          </p>

          <h2>MISSION</h2>
          <p>
            To create value through superior chemical products and operate as a responsible company.
            Building trust and respect of our clients, partners, and employees using science, technology,
            and sustainable processes in accord with the environment.
          </p>
          <p>
            We aim to reach the pinnacle of success by offering top-tier chemical ranges and adapting
            to market trends, improving quality, delivery, and cost competitiveness.
          </p>

          <h2>VALUE</h2>
          <ul>
            <li><strong>Safety:</strong> We assess risk and prioritize safety before any action.</li>
            <li><strong>Quality:</strong> We deliver exceptional quality in products and relationships.</li>
            <li><strong>Integrity:</strong> Ethical operations and community respect guide us.</li>
            <li><strong>Innovation:</strong> Customer-focused R&D to improve and grow together.</li>
            <li><strong>Customer Satisfaction:</strong> We commit to continuous improvement and service.</li>
          </ul>
        </motion.div>
      </div>

      {/* <Footer /> */}
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
};

export default AboutPage;

