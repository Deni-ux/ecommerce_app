import React, {useState} from "react";
import { client, urlFor } from "../../lib/client";

//making an API call to fetch the desired product by using getStaticProps to pre-render the page
const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className='product-detail-image' />
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
