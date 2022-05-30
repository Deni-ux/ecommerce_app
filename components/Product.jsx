import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

//destructure some of the qualities of the product prop
const Product = ({product: {name, image, slug, price}}) => {
  return (
    <div>
      <Link href={`product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])}
            width={250}
            height={250}
            alt="xbox series"
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>£{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product