// import { db } from '../firebase';
// import { ref, update } from 'firebase/database';


// function getStatus(expiryDate) {
//   if (!expiryDate) return 'no-date';
//   const now = new Date();
//   const exp = new Date(expiryDate);
//   const diff = (exp - now) / (1000 * 60 * 60 * 24);
//   if (diff < 0) return 'expired';
//   if (diff <= 7) return 'near-expiry';
//   return 'valid';
// }

// export default function ProductItem({ product }) {
//   const status = getStatus(product.expiryDate);

//   return (
//     <div className={`product-item ${status}`}>
//       <strong>{product.name}</strong>
//       <span style={{ marginLeft: '10px' }}>
//         {product.expiryDate ? `(Expires: ${product.expiryDate})` : '(No expiry date)'}
//       </span>
//       {status === 'expired' && <span style={{ color: 'red', marginLeft: '10px' }}> ❌ Expired</span>}
//       {status === 'near-expiry' && <span style={{ color: 'orange', marginLeft: '10px' }}> ⚠️ Expiring Soon</span>}
//     </div>
//   );
// }


// function getStatus(expiryDate) {
//   if (!expiryDate) return 'no-date';
//   const now = new Date();
//   const exp = new Date(expiryDate);
//   const diff = (exp - now) / (1000 * 60 * 60 * 24);
//   if (diff < 0) return 'expired';
//   if (diff <= 7) return 'near-expiry';
//   return 'valid';
// }

// export default function ProductItem({ product }) {
//   const status = getStatus(product.expiryDate);

//   const cardStyles = {
//     border: '1px solid #ccc',
//     borderRadius: '12px',
//     padding: '16px',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fff',
//     width: '250px',
//     height: '160px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
    
//   };

//   const statusColor = {
//     expired: 'red',
//     'near-expiry': 'orange',
//     valid: 'green',
//     'no-date': 'gray',
//   };

//   return (
//     <div className="product-card" style={cardStyles}>
//       <strong style={{ fontSize: '18px' }}>{product.name}</strong>
//       <span style={{ color: '#555' }}>
//         {product.expiryDate ? `(Expires: ${product.expiryDate})` : '(No expiry date)'}
//       </span>
//       <span style={{ color: statusColor[status], fontWeight: 'bold' }}>
//         {status === 'expired' && '❌ Expired'}
//         {status === 'near-expiry' && '⚠️ Expiring Soon'}
//         {status === 'valid' && '✅ Valid'}
//         {status === 'no-date' && 'ℹ️ No Expiry Date'}
//       </span>
//     </div>
//   );
// }


import './ProductItem.css';

// function getStatus(expiryDate) {
//   const now = new Date();
//   const exp = new Date(expiryDate);
//   const diff = (exp - now) / (1000 * 60 * 60 * 24);

//   if (diff < 0) return 'expired';
//   if (diff <= 7) return 'near-expiry';
//   return 'valid';
// }

// export default function ProductItem({ product, onDelete }) {
//   const status = getStatus(product.expiryDate);

//   return (
//     <div className={`product-card ${status}`}>
//       <h4>{product.name}</h4>
//       <p>Expires on: {product.expiryDate}</p>
//       <p className="status">
//         {status === 'expired' && <span style={{ color: 'red' }}>❌ Expired</span>}
//         {status === 'near-expiry' && <span style={{ color: 'orange' }}>⚠️ Near Expiry</span>}
//         {status === 'valid' && <span style={{ color: 'green' }}>✅ Valid</span>}
//       </p>
//       {/* <button onClick={() => onDelete(product.id)}>Delete</button> */}
//     </div>
//   );
// }

import './ProductItem.css';

function getStatus(expiryDate) {
  const now = new Date();
  const exp = new Date(expiryDate);
  const diff = (exp - now) / (1000 * 60 * 60 * 24);

  if (diff < 0) return 'expired';
  if (diff <= 7) return 'near-expiry';
  return 'valid';
}

export default function ProductItem({ product }) {
  const status = getStatus(product.expiryDate);

  return (
    <div className={`product-card ${status}`}>
      {product.imageUrl && (
        <img src={product.imageUrl} alt={product.name} className="product-image" />
      )}
      <h4>{product.name}</h4>
      <p>Expires on: {product.expiryDate}</p>
      <p className="status">
        {status === 'expired' && <span style={{ color: 'red' }}>❌ Expired</span>}
        {status === 'near-expiry' && <span style={{ color: 'orange' }}>⚠️ Near Expiry</span>}
        {status === 'valid' && <span style={{ color: 'green' }}>✅ Valid</span>}
      </p>
      
    </div>
  );
}

