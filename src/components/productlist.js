import React from 'react'
import Product from './product'

function ProductList(props) {
  return (
    props.productList.length > 0 ?
    props.productList.map((product,i) =>{
        return <Product product={product} key={i} incrementQuantity = {props.incrementQuantity} index = {i} decrementQuantity = {props.decrementQuantity} removeItem = {props.removeItem}/>
    })
    : <h1>No Products Exist in the Cart</h1>
  );
}

export default ProductList;