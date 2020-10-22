import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const {img, name, price, seller, stock, star, features} = props.product;
   
    return (
        <div className="product mb-4">
             <div className="product-img pr-4">
                  <img src={img} alt=""/>
             </div>
             <div className="product-info ">
                  <div><h6>{name}</h6></div>
                  <div className="more-info">
                      <div>
                        <p>by:{seller}</p>
                        <p>$ {price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <Button 
                        className="btn pl-5 pr-5 mb-2" variant="warning"
                        // onClick={() => props.handleAddProduct(props.Product)}
                        onClick={() => props.handleAddProduct(props.product)}
                        ><FontAwesomeIcon className="text-dark mr-2" icon={faShoppingCart} />add to cart</Button>
                      </div>
                      {/* <div className="">
                         <p>{star}</p>
                         <p>{features.value}</p>
                      </div> */}
                  </div>
             </div>
        </div>
    );
};

export default Product;