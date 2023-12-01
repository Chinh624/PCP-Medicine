import './even.css';
import ProductList from "./Produc-list";
import React, { useState } from 'react';

function Event({ eventType }) {
    const initialState = {
        products: [
            {
                id1: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Hinh_1___Le_cong_bo_EU_GMP.jpg',
                productName: 'LỄ CÔNG BỐ CHÚC MỪNG PCP MEDICINE ĐẠT TIÊU CHUẨN EU-GMP',

            },
            {
                id2: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Hinh_1___HNKH.jpg',
                productName2: 'HỘI NGHỊ KHÁCH HÀNG 2023 KHU VỰC HỒ CHÍ MINH – MIỀN ĐÔNG',

            },
            {
                id3: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Kham_benh_nhan_dao_3_1.jpg',
                productName3: 'PCP MEDICINE CHUNG TAY CÙNG HOẠT ĐỘNG KHÁM CHỮA',

            },
            {
                id4: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Hoc_bong___Hinh_1_1.jpg',
                productName4: 'PCP MEDICINE TÀI TRỢ HỌC BỔNG DÀNH CHO SINH VIÊN KHOA',

            },
            {
                id5: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2023/thumbs/1500_crop_Thuc_tap___Hinh_1.jpg',
                productName5: 'PCP MEDICINE CHÀO ĐÓN ĐOÀN THỰC TẬP SINH ĐẾN TỪ',

            },
            {
                id6: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2023/thumbs/1500_crop_Hinh_3.jpg',
                productName6: 'PCP MEDICINE KÝ KẾT HỢP TÁC VỚI VIỆN KIỂM NGHIỆM THUỐC',

            },

        ],
    };
    return (

        <div className="khungchua">
            <div>
                <img className="img-header" src="https://icdn.24h.com.vn/upload/2-2022/images/2022-05-17/picture-1-1652776802-797-width660height440.jpg" alt="header event" />
                <div className="TinTuc">TIN TỨC</div>
            </div>
            <div className="header-2">
                <button className="list ">TẤT CẢ</button>
                <button className="list ">KHOẺ MỖI NGÀY</button>
                <button className="list ">HOẠT ĐỘNG CỦA PCP</button>
                <button className="list ">KHO TÀI LIỆU Y DƯỢC</button>
            </div>
            <br></br>
            <div className="bodyy">
                <div className="khungbody ">
                    <div className="body-1">
                        <img className="product-body1" src="https://bostonpharma.com.vn/vnt_upload/news/04_2022/thumbs/1500_crop_Eng_Hop_tac_tuyen_dung_DHYD.jpg" />

                    </div>
                    <div className="body-2">
                        <h1>TUYỂN DỤNG NHÂN SỰ GIỮA PCP MEDICINE VỚI ĐẠI HỌC Y DƯỢC TP.HCM</h1>
                        <hr></hr>
                        <p>Tại PCP Medicine, Ban Giám đốc đề cao sự hợp tác cùng Đại Học Y Dược TP.HCM trong việc tư vấn, định hướng và tuyển dụng sinh viên mới tốt nghiệp</p>
                        <button className="timhieuthem">TÌM HIỂU HÊM</button>
                    </div>
                </div>
            </div >
            <div>
                <ProductList products={initialState.products} />

            </div>
        </div>
    )
}
export default Event;