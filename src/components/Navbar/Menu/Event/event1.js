import './even.css';

import ProductList1 from "./Productlist1";
import React from 'react';


function Event_1({ eventType }) {
    const handleButtonClick = () => {
        // Redirect to the desired URL using href
        window.location.href = 'https://www.lazada.vn';
    };
    const initialState = {
        products: [
            {
                id1: 1,
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2023/thumbs/1500_crop_Banner.jpg',
                productName: 'BOSTON PHARMA ĐƯỢC CHỨNG NHẬN TUÂN THỦ CÁC HƯỚNG DẪN',
                learnMoreLink: 'https://www.lazada.vn'
            },
            {
                id2: 2,
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/08_2023/thumbs/1500_crop_EN_Thong_bao.jpg',
                productName2: 'THÔNG BÁO LỊCH NGHỈ LỄ QUỐC KHÁNH 2/9',
                learnMoreLink: 'https://shopee.vn'
            },
            {
                id3: 3,
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/08_2023/thumbs/1500_crop_Hinh_5___He_2023.jpg',
                productName3: 'PCP MEDICINE ĐỒNG HÀNH CÙNG CHIẾN DỊCH THANH NIÊN',
                learnMoreLink: 'https://www.lazada.vn'
            },
            {
                id4: 4,
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/08_2023/thumbs/1500_crop_AOAC_1.jpg',
                productName4: 'PCP MEDICINE ĐỒNG HÀNH CÙNG HỘI NGHỊ QUỐC TẾ AOAC',
                learnMoreLink: 'https://shopee.vn'
            },
            {
                id5: 5,
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/12_2022/thumbs/1500_crop_Hinh_01.jpg',
                productName5: 'Điểm chung giúp FPT tiết kiệm hàng trăm tỷ đồng mỗi năm và',
                learnMoreLink: 'https://www.lazada.vn'
            },
            {
                id6: 6,
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/05_2023/thumbs/1500_crop_Hinh_02.jpg',
                productName6: 'PCP MEDICINE - KICK OFF MEETING 2023',
                learnMoreLink: 'https://shopee.vn'
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
                <a href="https://shopee.vn" ><button className="list">TẤT CẢ</button></a>
                <a href="https://www.lazada.vn"><button className="list">KHOẺ MỖI NGÀY</button></a>
                <a href="https://tiki.vn"><button className="list">HOẠT ĐỘNG PCP</button></a>
                <a href="https://www.sendo.vn"><button className="list">KHO TÀI LIỆU Y DƯỢC</button></a>
            </div>
            <br></br>
            <div className="bodyy">
                <div className="khungbody ">
                    <div className="body-1">
                        <img className="product-body1" src="https://bostonpharma.com.vn/vnt_upload/news/10_2023/thumbs/1500_crop_Hinh_1___HNKH.jpg" />

                    </div>
                    <div className="body-2">
                        <h1>LỄ CÔNG BỐ PCP ĐẠT MỤC TIÊU</h1>
                        <hr></hr>
                        <p>Ngày 30/9/2023 vừa qua, tại Trung tâm Hội nghị White Palace, PCP MEDICINE đã tổ chức thành công Hội nghị khách hàng 2023 khu vực Hồ Chí Minh – Miền Đông hướng đến mục tiêu “Hợp tác bền vững – Cùng nhau phát triển”.</p>
                        <button className="timhieuthem" onClick={handleButtonClick}>TÌM HIỂU THÊM</button>
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