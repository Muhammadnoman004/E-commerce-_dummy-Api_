import React, { useEffect, useState } from 'react'
import AxiosHandle from './AxiosHandle'

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
            {
                AllProducts.map(data => {
                    return (
                        <div key={data.id} style={{ backgroundColor: 'white', marginTop: "20px", width: "50%" }}>
                            <h2>{data.title}</h2>
                            <h4>$ {data.price}</h4>
                            <p>{data.description}</p>
                            <img src={data.thumbnail} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}
