import './even.css';
import React, { useState } from 'react';
import ProductList_3 from './Productlist3';
import { Link } from 'react-router-dom'; // Import Link từ React Router
function Event_3() {
    const handleButtonClick = () => {
        // Redirect to the desired URL using href
        window.location.href = 'https://bostonpharma.com.vn/vn/thong-bao-ve-tinh-trang-giao-hang-do-anh-huong-dich-covid-19.html';
    };
    const initialState = {
        products: [
            {
                id1: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/12_2022/thumbs/1500_crop_hinh_tham_quan_DHQG.jpg',
                productName: 'SINH VIÊN KHOA Y - ĐẠI HỌC QUỐC GIA TP. HCM ĐẾN THAM ',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/nhung-thuc-pham-can-bo-sung-de-bao-ve-gan.html'
            },
            {
                id2: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/12_2022/thumbs/1500_crop_Hinh_01_1.jpg',
                productName2: 'PCP MEDICINE - NHÀ TÀI TRỢ KIM CƯƠNG CHƯƠNG TRÌNH ĐÔNG',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-nha-tai-tro-kim-cuong-chuong-trinh-dong-am-2022.html'
            },
            {
                id3: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/12_2022/thumbs/1500_crop_Hinh_03_2.jpg',
                productName3: 'PCP MEDICINE LÀ THƯƠNG HIỆU HÀNG ĐẦU VIỆT NAM NĂM 2022',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-la-thuong-hieu-hang-dau-viet-nam-nam-2022.html'
            },
            {
                id4: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/12_2022/thumbs/1500_crop_BOSTON_PHARMA_KHCN___Thumbnail.jpg',
                productName4: 'PCP MEDICINE ĐẠT CHỨNG NHẬN DOANH NGHIỆP KHOA HỌC',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/boston-pharma-dat-chung-nhan-doanh-nghiep-khoa-hoc-va-cong-nghe.html'
            },
            {
                id5: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/11_2022/thumbs/1500_crop_Hinh_01___Ky_niem_15_nam.jpg',
                productName5: 'SỰ KIỆN KỶ NIỆM 15 NĂM THÀNH LẬP PCP MEDICINE',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/su-kien-ky-niem-15-nam-thanh-lap-boston-pharma.html'
            },
            {
                id6: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/10_2021/thumbs/1500_crop_Hinh_01___Dat_hang_trung_vang.jpg',
                productName6: 'THÔNG BÁO KHÁCH HÀNG TRÚNG GIẢI CHƯƠNG TRÌNH “ĐẶT HÀNG',
                learnMoreLink: 'https://bostonpharma.com.vn/vn/thong-bao-khach-hang-trung-giai-chuong-trinh-dat-hang-trung-vang-.html'
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
                        <img className="product-body1" src="https://bostonpharma.com.vn/vnt_upload/news/04_2022/thumbs/1500_crop_Eng_Thong_bao_giao_hang.jpg" />

                    </div>
                    <div className="body-2">
                        <h1>THÔNG BÁO VỀ TÌNH TRẠNG GIAO HÀNG DO ẢNH HƯỞNG DỊCH COVID-19</h1>
                        <hr></hr>
                        <p>Do tình hình dịch bệnh Covid19 đang diễn biến phức tạp và chấp hành giãn cách theo chỉ thị số 16/CT-TTg của Thủ tướng Chính phủ ...</p>
                        <button className="timhieuthem" onClick={handleButtonClick}><a href="https://bostonpharma.com.vn/vn/thong-bao-ve-tinh-trang-giao-hang-do-anh-huong-dich-covid-19.html"></a>TÌM HIỂU THÊM</button>
                    </div>
                </div>
            </div >
            <div>
                <ProductList_3 products={initialState.products} />

            </div>
        </div>
    )
}
export default Event_3;