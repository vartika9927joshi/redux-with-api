import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../Store/Action';

const ProductDetail = () => {
    const productDetail = useSelector((state)=>state.counterReducer.productDetail);
    const {id} = useParams()
    const dispatch = useDispatch();
    useEffect(()=>{
        getProduct(dispatch,id);
    },[])
  return (
    <div>{productDetail?.title}</div>
  )
}

export default ProductDetail