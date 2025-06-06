// import { useEffect, useState } from 'react';
// import { db, ref, onValue } from '../firebase';
// import ProductItem from '../components/ProductItem';

// export default function Alerts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const productRef = ref(db, 'products');
//     onValue(productRef, (snapshot) => {
//       const data = snapshot.val();
//       const loaded = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
//       setProducts(loaded);
//     });
//   }, []);

//   return (
//     <div>
//       <h2>Product Expiry Alerts</h2>
//       {products.map((product) => (
//         <ProductItem key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }


// import ProductList from '../components/ProductList';

// export default function Alerts({ products }) {
//   const handleDelete = (id) => {
//     // Implement deletion logic if needed
//     alert(`Delete product with ID: ${id}`);
//   };

//   return (
//     <section>
//       <h2>Product Expiry Alerts</h2>
//       <ProductList products={products} onDelete={handleDelete} />
//     </section>
//   );
// }

import './Alerts.css';
import ProductList from '../components/ProductList';

export default function Alerts({ products }) {
  return (
    <section>
      <h2>Product Expiry Alerts</h2>
      <ProductList products={products} />

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section company-info">
            <img
              src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-b3a4-622f-bf6c-9d8dae4b2e5d/raw?se=2025-05-15T17%3A44%3A17Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-15T13%3A39%3A03Z&ske=2025-05-16T13%3A39%3A03Z&sks=b&skv=2024-08-04&sig=bpBq3kmH5bLVkbDS2xS%2B0KZbkz7ZfspwUHTy5wXNPv8%3D"
              alt="ChemSafe Industries"
              className="logo"
            />
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
            <p>
              <strong>Manufacturing Site & Registered Office:</strong><br />
              Bamnod 425503, Maharashtra
            </p>
            <p>
              <strong>Head Office:</strong><br />
              Bamnod 425503, Maharashtra
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Copyright 2025 ChemSafe Industries. All Rights Reserved</p>
          <p>Design & Developed by Dnyaneshwar Kolhe</p>
        </div>
      </footer>
    </section>
  );
}
