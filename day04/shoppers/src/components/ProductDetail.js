import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { axiosClient } from '../config/axios'

const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState({});
    const params = useParams();
    useEffect(() => {
        console.log(params);
        axiosClient.get(`/product-detail/${params.id}`)
            .then(res => res.data)
            .then(data => setProductDetail(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div>
            <h1>{productDetail.name}</h1>
            <p className="price"><del className="old-price">${productDetail.oldPrice}</del> ${productDetail.price} <span className="discount">{Math.round((productDetail.oldPrice - productDetail.price) * 100 / productDetail.oldPrice)}% off </span></p>
            <h3>{productDetail.desc}</h3>
        </div>
    )
}

export default ProductDetail