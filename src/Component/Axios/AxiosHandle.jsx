import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AxiosHandle() {

    const [products, setproducts] = useState([])

    useEffect(() => { console.log(products); }, [products])

    useEffect(() => {
        axios.get("https://dummyjson.com/products", {
            headers: {
                Authorization: 'Bearer Noman007'
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    setproducts([...res.data.products])
                }
            })
            .catch((Error) => {
                console.log(Error);
            })
    }, [])

    

    return (
        <div>

        </div>
    )
}
