import React from "react";
import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({products, bannersData}) => {
  return (
    <div>
      <>
        <HeroBanner heroBanner={bannersData.length && bannersData[0]} />
        {console.log(bannersData)}


        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>Gaming Products</p>
        </div>
        <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        <FooterBanner footerBanner={bannersData && bannersData[0]} />
      </>
    </div>
  );
};

//to connect Sanity with next.js we use gerServerSideProps async funct
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
 
  const bannerQuery = '*[_type == "banner"]';
  const bannersData = await client.fetch(bannerQuery);

  return {
    props: { products, bannersData }
}

}

export default Home;
