import React from 'react';
import './Product.css'

export default function Product() {
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="product__price">
                        <small>
                            30$
                        </small>
                        </div>
                    <div className="product__rating">⭐⭐⭐⭐⭐</div>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" />
            </div>
        </div>
    )
}
