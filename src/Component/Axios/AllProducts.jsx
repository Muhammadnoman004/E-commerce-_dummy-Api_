import React, { useEffect, useState } from 'react'
import AxiosHandle from './AxiosHandle'
import Navbar from './Navbar'

export default function AllProducts() {

    const [AllProducts, setAllProducts] = useState([])

    useEffect(() => {
        AxiosHandle.get('/products')
            .then(res => {
                setAllProducts(res.products)
            }).catch(error => {
                console.log(error);
            })
    }, [console.log(AllProducts)])


    return (
        <div>
            <Navbar />
            <div className='MainProductDiv'>
                {
                    AllProducts.map(data => {
                        return (
                            <div key={data.id} className='ProductDiv'>
                                <img id='img' src={data.thumbnail} alt="" />
                                <h2 id='title'>{data.title}</h2>
                                <h4 id='price'>$ {data.price}</h4>
                                <p id='description'>{data.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
