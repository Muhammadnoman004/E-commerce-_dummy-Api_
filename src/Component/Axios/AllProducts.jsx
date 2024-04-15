import React, { useContext, useEffect } from 'react'
import { Product } from '../Context/Context'
import AxiosHandle from './AxiosHandle'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function AllProducts() {

    const [Data, setData] = useContext(Product)
    const navigate = useNavigate()

    const userToken = sessionStorage.getItem("Token");
    console.log(userToken);
    if (!userToken) {
        navigate('/login');
    }

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
                                            <Link to={`/SingleProduct?productid=${data.id}`}><p id='detail'>View details...</p></Link>
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
