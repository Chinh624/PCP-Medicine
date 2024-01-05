import './even.css';

import React, { useState } from 'react';
import ProductList_4 from './Productlist4';


function Event_4() {
    const handleButtonClick = () => {
        // Redirect to the desired URL using href
        window.location.href = '';
    };
    const initialState = {
        products: [
            {
                id1: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2022/thumbs/1500_crop_1___Copy.jpg',
                productName: 'TEAM BUILDING NHA TRANG 2022 - WE ARE PCP MEDICINE ',
                learnMoreLink: ''
            },
            {
                id2: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2022/thumbs/1500_crop_BK___Hinh_05.jpg',
                productName2: 'PCP MEDICINE– NHÃN HÀNG TOCOMAX PLUS “NẠP NĂNG',
                learnMoreLink: ''
            },
            {
                id3: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2022/thumbs/1500_crop_Hinh_02.png',
                productName3: 'PCP MEDICINE TĂNG TỐC VẬN HÀNH CÙNG BASE.VN',
                learnMoreLink: ''
            },
            {
                id4: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2022/thumbs/1500_crop_tim.jpg',
                productName4: 'PCP MEDICINE CHIA SẺ GÁNH NẶNG CÙNG QUÝ KHÁCH HÀNGH',
                learnMoreLink: ''
            },
            {
                id5: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2022/thumbs/1500_crop_Hinh_02.jpg',
                productName5: 'PCP MEDICINE ĐỒNG HÀNH CÙNG KHOA Y TRƯỜNG ĐẠI HỌC',
                learnMoreLink: ''
            },
            {
                id6: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2022/thumbs/1500_crop_3.jpg',
                productName6: 'PCP MEDICINE ĐỒNG HÀNH CÙNG INTEL TECH FUN RUN 2022',
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