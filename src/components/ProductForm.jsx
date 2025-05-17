// import { useState } from 'react';
// import { db, ref, push } from '../firebase';

// export default function ProductForm() {
//   const [name, setName] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !expiryDate) return;
//     const product = { name, expiryDate };
//     push(ref(db, 'products'), product);
//     setName('');
//     setExpiryDate('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Product name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="date"
//         value={expiryDate}
//         onChange={(e) => setExpiryDate(e.target.value)}
//         required
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }
