import React from 'react';
import './even.css';

const ProductList_2 = ({ products }) => {
    return (
        <div>
            <div className="a">
                {products.map(product => (
                    <div className="b" key={product.id}>
                        <img className="amg" src={product.imageUrl} alt={product.productName} />
                        <a href='https://bostonpharma.com.vn/vn/nhung-thuc-pham-can-bo-sung-de-bao-ve-gan.html' className="List-tintuc"> {product.productName}</a>
                        <a href='https://bostonpharma.com.vn/vn/le-cong-bo-chuc-mung-boston-pharma-dat-tieu-chuan-eu-gmp.html' className="List-tintuc"> {product.productName2}</a>
                        <a href='https://bostonpharma.com.vn/vn/hoi-nghi-khach-hang-khu-vuc-ho-chi-minh-mien-dong-2023-voi-chu-de-hop-tac-ben-vung-cung-nhau-phat-trien.html' className='List-tintuc'>{product.productName3}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-chung-tay-cung-hoat-dong-kham-chua-benh-nhan-dao-tai-tinh-dong-nai.html' className='List-tintuc'>{product.productName4}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-tai-tro-hoc-bong-danh-cho-sinh-vien-khoa-y-dai-hoc-quoc-gia-tp-hcm.html' className='List-tintuc'>{product.productName5}</a>
                        <a href='https://bostonpharma.com.vn/vn/bo-y-te-de-xuat-cong-bo-het-dich-covid-19-thuoc-nhom-a.html' className='List-tintuc'>{product.productName6}</a>
                        <button className="timhieuthem"><a className="timhieuthem" href='https://bostonpharma.com.vn/vn/tin-tuc.html'>TìM HIỂU THÊM</a></button>
                    </div>
                ))}
            </div>

        </div >
    );
};

export default ProductList_2;
