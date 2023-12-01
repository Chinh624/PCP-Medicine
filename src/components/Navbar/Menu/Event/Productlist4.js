import React from 'react';
import './even.css';

const ProductList_4 = ({ products }) => {
    return (
        <div>
            <div className="a">
                {products.map(product => (
                    <div className="b" key={product.id}>
                        <img className="amg" src={product.imageUrl} style={product.imageStyle} alt={product.productName} />
                        <a href='https://bostonpharma.com.vn/vn/team-building-nha-trang-2022-we-are-boston-pharma.html' className="List-tintuc"> {product.productName}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-dong-hanh-cung-bk-marathon-2022.html' className="List-tintuc"> {product.productName2}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-tang-toc-van-hanh-cung-base-vn.html' className='List-tintuc'>{product.productName3}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-chia-se-ganh-nang-cung-quy-khach-hang-khu-vuc-mien-trung.html' className='List-tintuc'>{product.productName4}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-dong-hanh-cung-khoa-y-truong-dai-hoc-quoc-gia-ho-chi-minh-phat-trien-dao-tao-nguon-nhan-luc-tre.htmll' className='List-tintuc'>{product.productName5}</a>
                        <a href='https://bostonpharma.com.vn/vn/boston-pharma-dong-hanh-cung-intel-tech-fun-run-2022-dem-den-dieu-ky-dieu-cho-tre-em-mo-coi-do-dich-covid-19.html' className='List-tintuc'>{product.productName6}</a>
                        <button onClick={() => window.open(product.learnMoreLink, '_blank')} className="timhieuthem">TÌM HIỂU THÊM</button>
                    </div>
                ))}
            </div>

        </div >
    );
};

export default ProductList_4;