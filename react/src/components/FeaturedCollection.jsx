import React from 'react'
import '../assets/css/FeaturedCollection.css'

export default function FeaturedCollection({image}) {
  return (
    <div className='featured-collection-container'>
    <h1 className="featured-collection-title">Featured Products</h1>
    <div className="divider"></div>
    <div className="featured-collection">
      {image && image.map((el, i)=>{
        return(
          <div className="featured-collection-item" key={i}>
            <div className="featured-collection-image-container">
            <img src={el.src} alt="" />
            </div>
            <a href="#" className='grid-product__meta'>
            <span className='grid-product__title'>Hudderton Backpack</span>
            <span className='grid-product__price-wrap'>-$98</span>
            </a>
          </div>
        )
      })}
      <div className="featured-collection-item">
        
      </div>
    </div>
    </div>
  )
}
