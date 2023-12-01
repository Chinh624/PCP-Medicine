import React from 'react';
import './even.css';

const ProductList_5 = ({ products }) => {
    return (
        <div>
            <div className="a">
                {products.map(product => (
                    <div className="b" key={product.id}>
                        <img className="amg" src={product.imageUrl} style={product.imageStyle} alt={product.productName} />
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-du-ngoan-hoi-an-da-nang-2022-cung-khach-hang-.html' className="List-tintuc"> {product.productName}</a>
                        <a href='https://bostonpharma.com.vn/vn/bosphagel-b-da-day-khoe-nhe-noi-lo.html' className="List-tintuc"> {product.productName2}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-hoan-thien-xay-dung-nha-may-dat-tieu-chuan-eu-gmp.html' className='List-tintuc'>{product.productName3}</a>
                        <a href='https://bostonpharma.com.vn/vn/thong-bao-khach-hang-trung-giai-chuong-trinh-dat-hang-trung-vang-.html' className='List-tintuc'>{product.productName4}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-tai-tro-hoc-bong-danh-cho-sinh-vien-khoa-y-dai-hoc-quoc-gia-tp-hcm.html' className='List-tintuc'>{product.productName5}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-chinh-thuc-duoc-cap-phep-luu-hanh-san-pham-molravir-400-hoat-chat-molnupiravir-.html' className='List-tintuc'>{product.productName6}</a>
                        <button onClick={() => window.open(product.learnMoreLink, '_blank')} className="timhieuthem">TÌM HIỂU THÊM</button>
                    </div>
                ))}
            </div>

        </div >
    );
};

export default ProductList_5;