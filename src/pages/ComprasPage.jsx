import React, { useEffect, useState } from 'react'

export const ComprasPage = () => {
    const [productos, setProductos] = useState([])

    const fetchProductos = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProductos(data)
        console.log(data)
    }

    useEffect(() => {
        fetchProductos()
    }, [])
    
  return (
    <div>ComprasPage</div>
  )
}
