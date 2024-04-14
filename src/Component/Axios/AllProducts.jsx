import React, { useContext, useEffect, useState } from 'react'
import Product from '../Context/Context'
import AxiosHandle from './AxiosHandle'
import Navbar from './Navbar'

export default function AllProducts() {

    const [Data, setData] = useContext(Product)
    const [AllProducts, setAllProducts] = useState([])

    useEffect(() => {
        AxiosHandle.get('/products')
            .then(res => {
                setData(res.products)
            }).catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <Navbar />
            {
                !Data.length ?
                    (
                        <h1 id='notfound'>Product Not Found!</h1>
                    ) : (
                        <div className='MainProductDiv'>
                            {

                                Data.map(data => {
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
                    )
            }


        </div>
    )
}
