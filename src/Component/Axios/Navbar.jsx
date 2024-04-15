import React, { useState } from 'react'
import { Product } from '../Context/Context'
import AxiosHandle from './AxiosHandle'
import { useContext } from 'react'

export default function Navbar() {

    const [Data, setData] = useContext(Product)


    const handleChange = (e) => {
        const value = e.target.value

        AxiosHandle.get(`/products/search?q=${value}`)
            .then(res => {
                setData(res.products)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <nav className='navbar'>
                <input id='searchInp' onChange={handleChange} placeholder='Search' type="text" />
            </nav>
        </div>
    )
}
