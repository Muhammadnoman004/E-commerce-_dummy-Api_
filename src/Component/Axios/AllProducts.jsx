import React, { useEffect, useState } from 'react'
import AxiosHandle from './AxiosHandle'

export default function AllProducts() {

    const [AllProducts, setAllProducts] = useState([])
    const [SearchValue, setSearchValue] = useState()


    useEffect(() => {
        AxiosHandle.get('/products')
            .then(res => {
                setAllProducts(res.products)
            }).catch(error => {
                console.log(error);
            })
    }, [console.log(AllProducts)])

    const SearchInp = (e) => {
        const value = e.target.value
        console.log(value);
        setSearchValue(value)
    }
    const SerchButton = () => {
        console.log(SearchValue);
    }

    return (
        <div>
            <nav className='navbar'>
                <input id='searchInp' onChange={SearchInp} placeholder='Search' type="text" />
                <button onClick={SerchButton}>Search</button>
            </nav>
            <ul>
                <li>{SearchValue}</li>
            </ul>
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
