// import ProductItem from './ProductItem';


// export default function ProductList({ products }) {
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <ProductItem key={product.id} product={product} />
//       ))}
//     </div>
//   );
  
// }


import ProductItem from './ProductItem';
import './ProductList.css';

export default function ProductList({ products }) {
  return (
    <div className="product-list-grid">
      {products.map((product) => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  );
}
