import './even.css';
import React, { useState } from 'react';
import ProductList_5 from './Productlist5';
import { Link } from 'react-router-dom'; // Import Link từ React Router
function Event_5() {
    const handleButtonClick = () => {
        // Redirect to the desired URL using href
        window.location.href = 'https://bostonpharma.com.vn/vn/thong-bao-khach-hang-trung-giai-chuong-trinh-dat-hang-trung-vang-.html';
    };
    const initialState = {
        products: [
            {
                id1: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/08_2022/thumbs/1500_crop_Hinh_08___Ba_Na.jpg',
                productName: 'PCP MEDICINE DU NGOẠN HỘI AN - ĐÀ NẴNG 2022 CÙNG KHÁCH ',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-du-ngoan-hoi-an-da-nang-2022-cung-khach-hang-.html'
            },
            {
                id2: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/06_2022/thumbs/1500_crop_Hinh_Bosphagel_B___Thumbnail_Eng.jpg',
                productName2: 'BOSPHAGEL B - DẠ DÀY KHỎE - NHẸ NỖI LO',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/bosphagel-b-da-day-khoe-nhe-noi-lo.html'
            },
            {
                id3: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/06_2022/thumbs/1500_crop_Hinh_01___Nha_may_EU.jpg',
                productName3: 'PCP MEDICINE HOÀN THIỆN XÂY DỰNG NHÀ MÁY ĐẠT TIÊU CHUẨN',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-hoan-thien-xay-dung-nha-may-dat-tieu-chuan-eu-gmp.html'
            },
            {
                id4: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2021/thumbs/1500_crop_Hinh_01___Dat_hang_trung_vang.jpg',
                productName4: 'THÔNG BÁO KHÁCH HÀNG TRÚNG GIẢI CHƯƠNG TRÌNH “ĐẶT HÀNG',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/thong-bao-khach-hang-trung-giai-chuong-trinh-dat-hang-trung-vang-.html'
            },
            {
                id5: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/02_2022/thumbs/1500_crop_Hinh_01___Thuoc_Molravir_400.jpg',
                productName5: 'MOLRAVIR 400 (HOẠT CHẤT MOLNUPIRAVIR) - THUỐC ĐIỀU TRỊ',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-tai-tro-hoc-bong-danh-cho-sinh-vien-khoa-y-dai-hoc-quoc-gia-tp-hcm.html'
            },
            {
                id6: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/04_2022/thumbs/1500_crop_Eng_Banner_Molravir.jpg',
                productName6: 'PCP MEDICINE CHÍNH THỨC ĐƯỢC CẤP PHÉP LƯU HÀNH SẢN',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-chinh-thuc-duoc-cap-phep-luu-hanh-san-pham-molravir-400-hoat-chat-molnupiravir-.html'
            },

        ],
    };
    return (

        <div className="khungchua">
            <div>
                <img className="img-header" src="https://icdn.24h.com.vn/upload/2-2022/images/2022-05-17/picture-1-1652776802-797-width660height440.jpg" alt="header" />
                <div className="TinTuc">TIN TỨC</div>
            </div>
            <div className="header-2">
                <Link to="/event" ><button className="list">TẤT CẢ</button></Link>
                <Link to="/event1"><button className="list">KHOẺ MỖI NGÀY</button></Link>
                <Link to="/event2"><button className="list">HOẠT ĐỘNG PCP</button></Link>
                <Link to="/event3"><button className="list">KHO TÀI LIỆU Y DƯỢC</button></Link>
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