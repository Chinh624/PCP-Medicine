import './even.css';
import ProductList1 from "./Productlist1";
import React, { useState } from 'react';

function Event_1({ eventType }) {
const initialState = {
products: [
{
id1: "Tìm hiểu thêm",
imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2023/thumbs/1500_crop_Banner.jpg',
productName: 'BOSTON PHARMA ĐƯỢC CHỨNG NHẬN TUÂN THỦ CÁC HƯỚNG DẪN',

        },
        {
            id2: "Tìm hiểu thêm",
            imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/08_2023/thumbs/1500_crop_EN_Thong_bao.jpg',
            productName2: 'THÔNG BÁO LỊCH NGHỈ LỄ QUỐC KHÁNH 2/9',

        },
        {
            id3: "Tìm hiểu thêm",
            imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/08_2023/thumbs/1500_crop_Hinh_5___He_2023.jpg',
            productName3: 'PCP MEDICINE ĐỒNG HÀNH CÙNG CHIẾN DỊCH THANH NIÊN',

        },
        {
            id4: "Tìm hiểu thêm",
            imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/08_2023/thumbs/1500_crop_AOAC_1.jpg',
            productName4: 'PCP MEDICINE ĐỒNG HÀNH CÙNG HỘI NGHỊ QUỐC TẾ AOAC',

        },
        {
            id5: "Tìm hiểu thêm",
            imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/12_2022/thumbs/1500_crop_Hinh_01.jpg',
            productName5: 'Điểm chung giúp FPT tiết kiệm hàng trăm tỷ đồng mỗi năm và',

        },
        {
            id6: "Tìm hiểu thêm",
            imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/05_2023/thumbs/1500_crop_Hinh_02.jpg',
            productName6: 'PCP MEDICINE - KICK OFF MEETING 2023',

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
            <button className="list ">TẤT CẢ</button>
            <button className="list ">KHOẺ MỖI NGÀY</button>
            <button className="list ">HOẠT ĐỘNG CỦA PCP</button>
            <button className="list ">KHO TÀI LIỆU Y DƯỢC</button>
        </div>
        <br></br>
        <div className="bodyy">
            <div className="khungbody ">
                <div className="body-1">
                    <img className="product-body1" src="https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Hinh_1___HNKH.jpg" />

                </div>
                <div className="body-2">
                    <h1>THÔNG BÁO KHÁCH HÀNG TRÚNG GIẢI CHƯƠNG TRÌNH ĐẶT APP THẢ GA - ĐÓN Ô TÔ VỀ NHÀ</h1>
                    <hr></hr>
                    <p>Ngày 30/9/2023 vừa qua, tại Trung tâm Hội nghị White Palace, Boston Pharma đã tổ chức thành công Hội nghị khách hàng 2023 khu vực Hồ Chí Minh – Miền Đông hướng đến mục tiêu “Hợp tác bền vững – Cùng nhau phát triển”.</p>
                    <button className="timhieuthem">TÌM HIỂU HÊM</button>
                </div>
            </div>
        </div >
        <div>
            <ProductList1 products={initialState.products} />

        </div>
    </div>
)
}
export default Event_1;