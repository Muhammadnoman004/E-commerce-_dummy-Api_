import React, { useState } from 'react'
import AxiosHandle from './AxiosHandle'

export default function Navbar() {

    const [SearchValue, setSearchValue] = useState([])


    const handleChange = (e) => {
        const value = e.target.value
        console.log(value);

        AxiosHandle.get(`/products/search?q=${value}`)
            .then(res => {
                console.log(res.products);
                setSearchValue(res.products)
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
            <div>
                {
                    SearchValue.map(list => {
                        return (

                            <div className='ProductDiv'>
                                <img id='img' src={list.thumbnail} alt="" />
                                <h2 id='title'>{list.title}</h2>
                                <h4 id='price'>$ {list.price}</h4>
                                <p id='description'>{list.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
