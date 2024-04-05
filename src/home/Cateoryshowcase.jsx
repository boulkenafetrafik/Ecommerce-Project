import React, { useState } from 'react'
import '../styles/category.css'; 
import Ratting from '../components/Ratting';
import { Link } from 'react-router-dom';

import "../styles/category.css"


const title = "Our Top Rated  Products";

const ProductData = [
{
imgUrl: 'src/assets/images/categoryTab/01.jpg',
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '$199.00',
id: 1,
},
{
imgUrl: 'src/assets/images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$199.00',
id: 2,
},
{
imgUrl: 'src/assets/images/categoryTab/03.jpg',
// imgUrl:'https://th.bing.com/th?id=OIP.y9VeULMiGTFzAT47Xwm3iAHaLJ&w=203&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '$199.00',
id: 3,
},
{
imgUrl: 'src/assets/images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '$199.00',
id: 4,
},
{
imgUrl: 'src/assets/images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '$199.00',
id: 5,
},
{
imgUrl: 'src/assets/images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: 'src/assets/images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '$199.00',
id: 7,
},
{
imgUrl: 'src/assets/images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '$199.00',
id: 8,
},



{
    imgUrl: 'src/assets/images/categoryTab/01.jpg',
    cate: 'Shoes',
    title: 'Nike Premier X',
    author: 'assets/images/course/author/01.jpg',
    brand: 'Nike',
    price: '$199.00',
    id: 14,
    },
    {
    imgUrl: 'src/assets/images/categoryTab/02.jpg',
    cate: 'Bags',
    title: 'Asthetic Bags',
    author: 'assets/images/course/author/02.jpg',
    brand: 'D&J Bags',
    price: '$199.00',
    id:42,
    },
    {
    imgUrl: 'src/assets/images/categoryTab/03.jpg',
    cate: 'Phones',
    title: 'iPhone 12',
    author: 'src/assets/images/categoryTab/brand/apple.png',
    brand: 'Apple',
    price: '$199.00',
    id: 43,
    },
    {
    imgUrl: 'src/assets/images/categoryTab/04.jpg',
    cate: 'Bags',
    title: 'Hiking Bag 15 Nh100',
    author: 'assets/images/course/author/04.jpg',
    brand: 'Gucci',
    price: '$199.00',
    id: 44,
    },
    {
    imgUrl: 'src/assets/images/categoryTab/05.jpg',
    cate: 'Shoes',
    title: 'Outdoor Sports Shoes',
    author: 'assets/images/course/author/05.jpg',
    brand: 'Nike',
    price: '$199.00',
    id: 54,
    },
    {
    imgUrl: 'src/assets/images/categoryTab/06.jpg',
    cate: 'Beauty',
    title: 'COSRX Snail Mucin',
    author: 'assets/images/course/author/06.jpg',
    brand: 'Zaara',
    price: '$199.00',
    id: 46,
    },
    {
    imgUrl: 'src/assets/images/categoryTab/07.jpg',
    cate: 'Bags',
    title: 'Look Less Chanel Bag ',
    author: 'assets/images/course/author/01.jpg',
    brand: 'Gucci',
    price: '$199.00',
    id: 74,
    },
    {
    imgUrl: 'src/assets/images/categoryTab/08.jpg',
    cate: 'Shoes',
    title: 'Casual Sneakers',
    author: 'assets/images/course/author/02.jpg',
    brand: 'Bata',
    price: '$199.00',
    id: 34,
    },


]



const Cateoryshowcase = () => {
    const [items,setItems] = useState(ProductData);

    // category filtering
    const filterItem = (categItem) => {
     const updateItem = ProductData.filter((curElem) => {
            return curElem.cate === categItem;
     });
     setItems(updateItem);
    };
//   return (
//     <div className='course-section style-3 padding-tb'>
//         <div className='course-shape one'><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
//         <div className='course-shape twos'><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>

//         {/* main section  */}
//         <div className='container'>
//             <div className="section-header">
//                 <h2 className='title'>{title}</h2>
//                 <div className='course-filter-group'>
//                     <ul className='lab-ul'>
//                         <li onClick={() => setItems(ProductData)}>All</li>
//                         <li onClick={() => filterItem("Shoes")}>Shoes</li>
//                         <li onClick={() => filterItem("Bags")}>Bags</li>
//                         <li onClick={() => filterItem("Phones")}>Phones</li>
//                         <li onClick={() => filterItem("Beauty")}>Beauty</li>
//                     </ul>
//                 </div>

//             </div>

//             <div className='section-wrapper'>
//                 <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
//                     {
//                         items.map((product) => <div key={product.id} className='col' >
//                                 <div className='course-item style-4'>
//                                     <div className='course-inner'>
//                                         <div className='course-thumb'>
//                                                 <img src={product.imgUrl} alt="" />
//                                                 <div className='course-category'>
//                                                     <div className='course-cate'>
//                                                         <a href="#">{product.cate}</a>
//                                                     </div>
//                                                     <div className='course-review'>
//                                                  <Ratting />
//                                                 </div>
//                                                 </div>

//                                         </div>

//                                         {/* content  */}
//                                         <div className='content'>
//                                             <Link to={`/shop/${product.id}`}><h5>{product.title}</h5></Link>
//                                             <div className='course-footer'>
//                                                <div className='course-author'>
//                                                <Link to="/" className='ca-name' >{product.brand}</Link>
//                                                </div>
//                                                <div className='course-price'>
//                                                 <Link>{product.price}</Link>
//                                                </div>

//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                         </div>)
//                     }
//                 </div>

//             </div>

//         </div>


//     </div>
//   )



// return (
//     <div className='container py-5 mt-4'>
//       <h2 className='text-center mb-4'>{title}</h2>
//       <div className='row mb-4'>
//         <div className='col'>
//           <button className='btn btn-primary me-2' onClick={() => setItems(ProductData)}>All</button>
//           <button className='btn btn-primary me-2' onClick={() => filterItem("Shoes")}>Shoes</button>
//           <button className='btn btn-primary me-2' onClick={() => filterItem("Bags")}>Bags</button>
//           <button className='btn btn-primary me-2' onClick={() => filterItem("Phones")}>Phones</button>
//           <button className='btn btn-primary me-2' onClick={() => filterItem("Beauty")}>Beauty</button>
//         </div>
//       </div>
//       <div className='row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1'>
//         {items.map((product) => (
//           <div key={product.id} className='col mb-4'>
//             <div className='card'>
//               <img src={product.imgUrl} className='card-img-top' alt='' />
//               <div className='card-body'>
//                 <div className='d-flex justify-content-between align-items-center'>
//                   <h5 className='card-title'><Link to={`/shop/${product.id}`}>{product.title}</Link></h5>
//                   <span className='text-muted'>{product.price}</span>
//                 </div>
//                 <p className='card-text'>{product.brand}</p>
//                 <Ratting />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );



// return (
//     <div className='container py-5'>
//       <div className='row'>
//         <div className='col-md-8'>
//           <h2 className='mb-4'>{title}</h2>
//         </div>
//         <div className='col-md-4 d-flex justify-content-end'>
//           <div className='mb-4'>
//             <button className='btn btn-primary me-2' onClick={() => setItems(ProductData)}>All</button>
//             <button className='btn btn-primary me-2' onClick={() => filterItem("Shoes")}>Shoes</button>
//             <button className='btn btn-primary me-2' onClick={() => filterItem("Bags")}>Bags</button>
//             <button className='btn btn-primary me-2' onClick={() => filterItem("Phones")}>Phones</button>
//             <button className='btn btn-primary' onClick={() => filterItem("Beauty")}>Beauty</button>
//           </div>
//         </div>
//       </div>
//       <div className='row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1'>
//         {items.map((product) => (
//           <div key={product.id} className='col mb-4'>
//             <div className='card'>
//               <img src={product.imgUrl} className='card-img-top' alt='' />
//               <div className='card-body'>
//                 <div className='d-flex justify-content-between align-items-center'>
//                   <h5 className='card-title'><Link to={`/shop/${product.id}`}>{product.title}</Link></h5>
//                   <span className='text-muted'>{product.price}</span>
//                 </div>
//                 <p className='card-text'>{product.brand}</p>
//                 <Ratting />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

// return (
//     <div className='container py-5'>
//       <div className='row'>
//         <div className='col-md-8'>
//           <h2 className='mb-4'>{title}</h2>
//         </div>
//         <div className='col-md-4 d-flex justify-content-end'>
//           <div className='mb-4'>
//             <button className='btn btn-primary me-2' onClick={() => setItems(ProductData)}>All</button>
//             <button className='btn btn-primary me-2' onClick={() => filterItem("Shoes")}>Shoes</button>
//             <button className='btn btn-primary me-2' onClick={() => filterItem("Bags")}>Bags</button>
//             <button className='btn btn-primary me-2' onClick={() => filterItem("Phones")}>Phones</button>
//             <button className='btn btn-primary' onClick={() => filterItem("Beauty")}>Beauty</button>
//           </div>
//         </div>
//       </div>
//       <div className='row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1'>
//         {items.map((product) => (
//           <div key={product.id} className='col mb-4'>
//             <div className='card'>
//               <Link to={`/shop/${product.id}`}>
//                 <img src={product.imgUrl} className='card-img-top img-hover' alt='' />
//               </Link>
//               <div className='card-body'>
//                 <div className='d-flex justify-content-between align-items-center'>
//                   <h5 className='card-title'><Link to={`/shop/${product.id}`}>{product.title}</Link></h5>
//                   <span className='text-muted'>{product.price}</span>
//                 </div>
//                 <p className='card-text'>{product.brand}</p>
//                 <Ratting />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );


return (
    <div className='container py-5'>
      <div className='row all'>
        <div className='col-md-8 '>
          <h2 className='mb-4'>{title}</h2>
        </div>
        <div className='col-md-4 d-flex justify-content-end'>
          <div className='mb-4'>
            <button className='btn btn-primary me-2' onClick={() => setItems(ProductData)}>All</button>
            <button className='btn btn-primary me-2' onClick={() => filterItem("Shoes")}>Shoes</button>
            <button className='btn btn-primary me-2' onClick={() => filterItem("Bags")}>Bags</button>
            <button className='btn btn-primary me-2' onClick={() => filterItem("Phones")}>Phones</button>
            <button className='btn btn-primary' onClick={() => filterItem("Beauty")}>Beauty</button>
          </div>
        </div>
      </div>
      <div className='row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1'>
        {items.map((product) => (
          <div key={product.id} className='col mb-4'>
            <div className='card'>
              <Link to={`/shop/${product.id}`}>
                <img src={product.imgUrl} className='card-img-top img-hover card-img-top' alt='' />
              </Link>
              <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h5 className='card-title'><Link to={`/shop/${product.id}`}>{product.title}</Link></h5>
                </div>
                <p className='card-text'>{product.brand}</p>
                <p className='stairs'><Ratting /></p>
                <div className="card-description">
                <button className="btn btn-danger">
            <span className="price">{product.price}</span> {/* Price displayed on hover */}
            Offre Bienvenue
          </button>
        
        </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  

}

export default Cateoryshowcase