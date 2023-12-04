import React from 'react';
import './even.css';

const ProductList_3 = ({ products }) => {
    return (
        <div>
            <div className="a">
                {products.map(product => (
                    <div className="b" key={product.id}>
                        <img className="amg" style={product.imageStyle} src={product.imageUrl} alt={product.productName} />
                        <a href='https://www.lazada.vn' className="List-tintuc"> {product.productName}</a>
                        <a href='https://shopee.vn' className="List-tintuc"> {product.productName2}</a>
                        <a href='https://shopee.vn' className='List-tintuc'>{product.productName3}</a>
                        <a href='https://www.lazada.vn' className='List-tintuc'>{product.productName4}</a>
                        <a href='https://shopee.vn' className='List-tintuc'>{product.productName5}</a>
                        <a href='https://www.lazada.vn' className='List-tintuc'>{product.productName6}</a>
                        <button onClick={() => window.open(product.learnMoreLink, '_blank')} className="timhieuthem">TÌM HIỂU THÊM</button>
                    </div>
                ))}
            </div>

        </div >
    );
};


export default ProductList_3;