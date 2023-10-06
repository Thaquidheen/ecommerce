import React, { useEffect, useState } from 'react'

import { Col, Row } from 'react-bootstrap'
import Product from '../component/Product'
import api from '../api/api'; 
const HomeScreen = () => {
const [products,setProducts] = useState([])
 
useEffect(() => {
    api.get('/api/products/')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 
 
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product=>(
                <Col  key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen