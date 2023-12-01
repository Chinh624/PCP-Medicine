import './even.css';
import React, { useState } from 'react';
import ProductList_4 from './Productlist4';
import { Link } from 'react-router-dom'; // Import Link từ React Router

function Event_4() {
    const handleButtonClick = () => {
        // Redirect to the desired URL using href
        window.location.href = 'https://bostonpharma.com.vn/vn/lo-hang-xuat-khau-dau-tien-trong-nam-2022.html';
    };
    const initialState = {
        products: [
            {
                id1: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2022/thumbs/1500_crop_1___Copy.jpg',
                productName: 'TEAM BUILDING NHA TRANG 2022 - WE ARE PCP MEDICINE ',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/team-building-nha-trang-2022-we-are-boston-pharma.html'
            },
            {
                id2: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2022/thumbs/1500_crop_BK___Hinh_05.jpg',
                productName2: 'PCP MEDICINE– NHÃN HÀNG TOCOMAX PLUS “NẠP NĂNG',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-dong-hanh-cung-bk-marathon-2022.html'
            },
            {
                id3: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2022/thumbs/1500_crop_Hinh_02.png',
                productName3: 'PCP MEDICINE TĂNG TỐC VẬN HÀNH CÙNG BASE.VN',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-tang-toc-van-hanh-cung-base-vn.html'
            },
            {
                id4: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2022/thumbs/1500_crop_tim.jpg',
                productName4: 'PCP MEDICINE CHIA SẺ GÁNH NẶNG CÙNG QUÝ KHÁCH HÀNGH',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-chia-se-ganh-nang-cung-quy-khach-hang-khu-vuc-mien-trung.html'
            },
            {
                id5: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2022/thumbs/1500_crop_Hinh_02.jpg',
                productName5: 'PCP MEDICINE ĐỒNG HÀNH CÙNG KHOA Y TRƯỜNG ĐẠI HỌC',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-dong-hanh-cung-khoa-y-truong-dai-hoc-quoc-gia-ho-chi-minh-phat-trien-dao-tao-nguon-nhan-luc-tre.html'
            },
            {
                id6: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2022/thumbs/1500_crop_3.jpg',
                productName6: 'PCP MEDICINE ĐỒNG HÀNH CÙNG INTEL TECH FUN RUN 2022',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-dong-hanh-cung-intel-tech-fun-run-2022-dem-den-dieu-ky-dieu-cho-tre-em-mo-coi-do-dich-covid-19.html'
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
                        <img className="product-body1" src="https://bostonpharma.com.vn/vnt_upload/news/01_2022/thumbs/1500_crop_Lo-hang-xuat-khau-dau-tien-trong-nam-2022.jpg" />

                    </div>
                    <div className="body-2">
                        <h1>LÔ HÀNG XUẤT KHẨU ĐẦU TIÊN TRONG NĂM 2022</h1>
                        <hr></hr>
                        <p>Tại Boston Pharma, Ban Giám đốc đề cao sự hợp tác cùng Đại Học Y Dược TP.HCM trong việc tư vấn, định hướng và tuyển dụng sinh viên mới tốt nghiệp.</p>
                        <button className="timhieuthem" onClick={handleButtonClick}>TÌM HIỂU THÊM</button>
                    </div>
                </div>
            </div >
            <div>
                <ProductList_4 products={initialState.products} />

            </div>
        </div>
    )
}
export default Event_4;