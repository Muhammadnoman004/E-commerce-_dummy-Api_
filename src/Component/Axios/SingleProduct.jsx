import React, { useEffect, useState } from 'react'
import AxiosHandle from './AxiosHandle';

export default function SingleProduct() {

  const [SingleProduct, setSingleproduct] = useState([])

  const urlParams = new URLSearchParams(window.location.search);
  const productid = urlParams.get('productid');

  useEffect(() => {

    AxiosHandle.get(`/products/${productid}`)
      .then(res => {
        setSingleproduct(res)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <br /><h1 style={{ textAlign: 'center' }}>..Detail Page..</h1>
      <div className='MainProductDiv'>
        <div className='singleProductDiv'>
          <img id='img' src={SingleProduct.thumbnail} alt="" />
          <h2 id='singleprotitle'>{SingleProduct.title}</h2><hr /><br />
          <h4>Brand : <span>{SingleProduct.brand}</span></h4>
          <h4 id='price'>Price : <span>$ {SingleProduct.price}</span></h4>
          <h4 id='price'>Discount : <span>{SingleProduct.discountPercentage} %</span></h4>
          <h4 id='price'>Rating : <span>{SingleProduct.rating}</span></h4>
          <h4 id='price'>Stock : <span>{SingleProduct.stock}</span></h4>
          <h4 id='description'>Description : <span>{SingleProduct.description}</span></h4><br /><hr />
        </div>
      </div >
    </div>
  )
}
