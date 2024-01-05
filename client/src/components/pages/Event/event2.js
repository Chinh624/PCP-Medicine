import './even.css';

import React from 'react';
import ProductList2 from './Productlist2';



function Event_2() {
    const handleButtonClick = () => {
        // Redirect to the desired URL using href
        window.location.href = '';
    };
    const initialState = {

        products: [
            {
                id1: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/06_2021/thumbs/1500_crop_Mini-game-checkin-28-06.jpg',
                productName: 'MINIGAME CHECK-IN LIỀN TAY - ĐẨY LÙI DỊCH NGAY!!',
                learnMoreLink: ''
            },
            {
                id2: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/04_2022/thumbs/1500_crop_Eng_Paralmax_500_cap.jpg',
                productName2: 'Paralmax 500 caps - Thêm quy cách mới - Thêm tiện lợi hơn!',
                learnMoreLink: ''
            },
            {
                id3: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/04_2022/thumbs/1500_crop_Eng_Khau_trang_y_te.jpg',
                productName3: 'KHẨU TRANG Y TẾ PCP MEDICINE LỰA CHỌN AN TOÀN CHO',
                learnMoreLink: ''
            },
            {
                id4: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/07_2021/thumbs/1500_crop_Dat-app-tha-ga-don-oto-ve-nha.jpg',
                productName4: 'HOT: CHƯƠNG TRÌNH ƯU ĐÃI ĐẶT APP THẢ GA – ĐÓN Ô TÔ VỀ NHÀ',
                learnMoreLink: ''
            },
            {
                id5: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/03_2021/thumbs/1500_crop_Thumb_IvyBoston_min_new.jpg',
                productName5: 'PCP MEDICINE RA MẮT SIRO HO CHO CẢ GIA ĐÌNH - IVYBOSTON',
                learnMoreLink: ''
            },
            {
                id6: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/03_2021/thumbs/1500_crop_Hinh_27_02_min_new.jpg',
                productName6: 'PCP MEDICINE CHÚC MỪNG NGÀY THẦY THUỐC VIỆT NAM',
                learnMoreLink: '',
            },


        ],
    };
    return (

        <div className="khungchua">
            <div className="header-2">
                <a href="" ><button className="list">TẤT CẢ</button></a>
                <a href=""><button className="list">KHOẺ MỖI NGÀY</button></a>
                <a href="https://tiki.vn"><button className="list">HOẠT ĐỘNG PCP</button></a>
                <a href="https://www.sendo.vn"><button className="list">KHO TÀI LIỆU Y DƯỢC</button></a>
            </div>
            <br></br>
            <div className="bodyy">
                <div className="khungbody ">
                    <div className="body-1">
                        <img className="product-body1" src="https://bostonpharma.com.vn/vnt_upload/news/11_2021/thumbs/1500_crop_Thong_bao_chuc_mung.jpg" />

                    </div>
                    <div className="body-2">
                        <h1>THÔNG BÁO KHÁCH HÀNG TRÚNG GIẢI CHƯƠNG TRÌNH ĐẶT APP THẢ GA - ĐÓN Ô TÔ VỀ NHÀ</h1>
                        <hr></hr>
                        <p>Boston Pharma xin thông báo danh sách các khách hàng trúng Giải Đặc Biệt, Giải Nhất, Giải Nhì, Giải Ba và 100 Giải khuyến kích trong chương trình "Đặt App thả ga - Đón ô tô về nhà.</p>
                        <button className="timhieuthem" onClick={handleButtonClick}>TÌM HIỂU THÊM</button>
                    </div>
                </div>
            </div >
            <div>
                <ProductList2 products={initialState.products} />

            </div>
        </div>
    )
}
export default Event_2;