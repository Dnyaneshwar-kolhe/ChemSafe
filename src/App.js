// import { useEffect, useState } from 'react';
// import ProductList from './components/ProductList.jsx';
// import { db, ref, onValue } from './firebase.js';
// import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { db, ref, onValue} from './firebase';
// import Home from './pages/Home';
// import Alerts from './pages/Alerts';
// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const productRef = ref(db, 'products');
//     onValue(productRef, (snapshot) => {
//       const data = snapshot.val();
//       const loaded = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
//       setProducts(loaded);
//     });
//   }, []);

//   // return (
//   //   <div className="App">
//   //     <h1>🛒 Product Expiry Alert System</h1>
//   //     <ProductList products={products} />
//   //   </div>
//   // );
//   return (
//     <Router>
//       <nav>
//   <div>ChemSafe Industries</div>
//   <div>
//     <Link to="/">Home</Link>
//     <Link to="/alerts">Product Expiry Alerts</Link>
//   </div>
// </nav>

//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/alerts" element={<Alerts />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




// import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { db, ref, onValue } from './firebase';
// import Home from './pages/Home';
// import Alerts from './pages/Alerts';

// function App() {
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
//     <Router>
//       <nav>
//         <div>ChemSafe Industries</div>
//         <div>
//           <Link to="/">Home</Link>
//           <Link to="/alerts">Product Expiry Alerts</Link>
//         </div>
//       </nav>

//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/alerts" element={<Alerts products={products} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { db, ref, onValue } from './firebase';
// import Home from './pages/Home';
// import Alerts from './pages/Alerts';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import './App.css'; // Make sure to import your CSS

// function App() {
//   const [products, setProducts] = useState([]);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const productRef = ref(db, 'products');
//     onValue(productRef, (snapshot) => {
//       const data = snapshot.val();
//       const loaded = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
//       setProducts(loaded);
//     });
//   }, []);

//   return (
//     <Router>
//       <nav className="navbar">
//         <div className="logo">ChemSafe</div>
//         <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           ☰
//         </div>
//         <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//           <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
//           <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
//           <Link to="/alerts" onClick={() => setIsMenuOpen(false)}>Product Expiry Alerts</Link>
//           <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
//         </div>
//       </nav>

//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/alerts" element={<Alerts products={products} />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { db, ref, onValue } from './firebase';
import Home from './pages/Home';
import Alerts from './pages/Alerts';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'; // Your custom styles

function App() {
  const [products, setProducts] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const productRef = ref(db, 'products');
    onValue(productRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
      setProducts(loaded);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <header className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="logo">ChemSafe</div>
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
        <NavLink to="/alerts" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Product Expiry Alerts</NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/alerts" element={<Alerts products={products} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
