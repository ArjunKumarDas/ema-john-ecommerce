import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const frist10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(frist10)
    const handleAddProduct = (product) => {
        console.log('addddddddddd', product);
    }
    return (
        <Container>
            <Row className="mt-5">
                <Col md={10}>
                    <ul>
                       {
                         products.map(pd => <Product
                            key={pd.key}
                            handleAddProduct={handleAddProduct}
                            product={pd}
                            ></Product>)
                       }
                   </ul>
                </Col>
                <Col md={2} className="border-left">
                    Cart
                </Col>
            </Row> 
        </Container>
    );
};

export default Shop;