import './even.css';

import React, { useState } from 'react';
import ProductList_5 from './Productlist5';

function Event_5() {
    const handleButtonClick = () => {
        // Redirect to the desired URL using href
        window.location.href = '';
    };
    const initialState = {
        products: [
            {
                id1: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/08_2022/thumbs/1500_crop_Hinh_08___Ba_Na.jpg',
                productName: 'PCP MEDICINE DU NGOẠN HỘI AN - ĐÀ NẴNG 2022 CÙNG KHÁCH ',
                learnMoreLink: ''
            },
            {
                id2: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/06_2022/thumbs/1500_crop_Hinh_Bosphagel_B___Thumbnail_Eng.jpg',
                productName2: 'BOSPHAGEL B - DẠ DÀY KHỎE - NHẸ NỖI LO',
                learnMoreLink: ''
            },
            {
                id3: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/06_2022/thumbs/1500_crop_Hinh_01___Nha_may_EU.jpg',
                productName3: 'PCP MEDICINE HOÀN THIỆN XÂY DỰNG NHÀ MÁY ĐẠT TIÊU CHUẨN',
                learnMoreLink: ''
            },
            {
                id4: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2021/thumbs/1500_crop_Hinh_01___Dat_hang_trung_vang.jpg',
                productName4: 'THÔNG BÁO KHÁCH HÀNG TRÚNG GIẢI CHƯƠNG TRÌNH “ĐẶT HÀNG',
                learnMoreLink: ''
            },
            {
                id5: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/02_2022/thumbs/1500_crop_Hinh_01___Thuoc_Molravir_400.jpg',
                productName5: 'MOLRAVIR 400 (HOẠT CHẤT MOLNUPIRAVIR) - THUỐC ĐIỀU TRỊ',
                learnMoreLink: ''
            },
            {
                id6: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/04_2022/thumbs/1500_crop_Eng_Banner_Molravir.jpg',
                productName6: 'PCP MEDICINE CHÍNH THỨC ĐƯỢC CẤP PHÉP LƯU HÀNH SẢN',
                learnMoreLink: ''
            },

        ],
    };
    return (

        <div className="khungchua">
            <div className="header-2">
                <a href="" ><button className="list">TẤT CẢ</button></a>
                <a href=""><button className="list">KHOẺ MỖI NGÀY</button></a>
                <a href=""><button className="list">HOẠT ĐỘNG PCP</button></a>
                <a href=""><button className="list">KHO TÀI LIỆU Y DƯỢC</button></a>
            </div>
            <br></br>
            <div className="bodyy">
                <div className="khungbody ">
                    <div className="body-1">
                        <img className="product-body1" src="https://bostonpharma.com.vn/vnt_upload/news/10_2021/thumbs/1500_crop_Hinh_01___Dat_hang_trung_vang.jpg" />

                    </div>
                    <div className="body-2">
                        <h1>THÔNG BÁO KHÁCH HÀNG TRÚNG GIẢI CHƯƠNG TRÌNH "ĐẶT HÀNG TRÚNG VÀNG"</h1>
                        <hr></hr>
                        <p>PCP Medicine xin thông báo danh sách các khách hàng trúng Giải Đặc Biệt, Giải Nhất, Giải Nhì và 500 Giải ba trong chương trình Đặt hàng trúng vàng.</p>
                        <button className="timhieuthem" onClick={handleButtonClick}>TÌM HIỂU THÊM</button>
                    </div>
                </div>
            </div >
            <div>
                <ProductList_5 products={initialState.products} />

            </div>
        </div >
    )
}
export default Event_5;