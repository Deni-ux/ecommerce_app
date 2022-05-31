﻿import React, {useState} from "react";
import { client, urlFor } from "../../lib/client";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

//making an API call to fetch the desired product by using getStaticProps to pre-render the page
const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          {/* image carousel */}
          <div className="image-container">
            <img src={urlFor(image && image[index])} className='product-detail-image' />
          </div>

          {/* <div className="small-images-container"> 
            {image?.map((item, i) => (
              <img
                src={urlFor(item)}
                className=""
                onMouseEnter=""
              />
            ))}
          </div> */}
        </div>
        <div className="product-detail-desc">
          <h1>
            {name}
          </h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">£{price}</p>

      {/* Quantity     */}
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick="">
                <AiOutlineMinus />
              </span>
              <span className="num" onClick="">
                0
              </span>
              <span className="plus" onClick="">
               <AiOutlinePlus />
              </span>
            </p>
          </div>

          {/* buy now button */}
          <div className="buttons">
            <button type='button' className="add-to-cart" onClick="">Add to Cart</button>
            <button type='button' className="buy-now" onClick="">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
// [slug] is going to be dynamic and we'll have access
//getStaticProps - getStaticPaths bug - every product needs to be clicked and immediately show the data for the current slug
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback:'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);


  return {
    props: { product, products }, //will be passed to the page component as props
  };
};

export default ProductDetails;
