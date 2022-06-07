import React from 'react';
import { FiChevronsDown } from 'react-icons/fi';


import { urlFor } from '../lib/client';


//pass the heroBanner prop
const HeroBanner = ({ heroBanner }) => {
  


  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{ heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="xbox series"
          className='hero-banner-image' />
        
        <div className='buttons'>
 <button className='buy-now'> EXPLORE  <span className='btn-icon'><FiChevronsDown /></span></button>
        </div>
          {/* <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link> */}
        
    
       <div className='desc'>
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;