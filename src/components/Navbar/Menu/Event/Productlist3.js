import React from 'react';
import './even.css';

const ProductList_3 = ({ products }) => {
    return (
        <div>
            <div className="a">
                {products.map(product => (
                    <div className="b" key={product.id}>
                        <img className="amg" src={product.imageUrl} style={product.imageStyle} alt={product.productName} />
                        <a href='https://bostonpharma.com.vn/vn/nhung-thuc-pham-can-bo-sung-de-bao-ve-gan.html' className="List-tintuc"> {product.productName}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-nha-tai-tro-kim-cuong-chuong-trinh-dong-am-2022.html' className="List-tintuc"> {product.productName2}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-la-thuong-hieu-hang-dau-viet-nam-nam-2022.html' className='List-tintuc'>{product.productName3}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-dat-chung-nhan-doanh-nghiep-khoa-hoc-va-cong-nghe.html' className='List-tintuc'>{product.productName4}</a>
                        <a href='https://bostonpharma.com.vn/vn/su-kien-ky-niem-15-nam-thanh-lap-boston-pharma.html' className='List-tintuc'>{product.productName5}</a>
                        <a href='https://bostonpharma.com.vn/vn/thong-bao-khach-hang-trung-giai-chuong-trinh-dat-hang-trung-vang-.html' className='List-tintuc'>{product.productName6}</a>
                        <button onClick={() => window.open(product.learnMoreLink, '_blank')} className="timhieuthem">TÌM HIỂU THÊM</button>
                    </div>
                ))}
            </div>

        </div >
    );
};

export default ProductList_3;