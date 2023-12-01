import './even.css';
import React, { useState } from 'react';
import ProductList_2 from './Productlist2';
import Event from './event';
import { Routes, Route, Link } from "react-router-dom";
import Event_1 from './event1';
function Event_2() {
    const initialState = {
        products: [
            {
                id1: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2023/thumbs/1500_crop_Thuc_tap___Hinh_1.jpg',
                productName: 'BOSTON PHARMA CHÀO ĐÓN ĐOÀN THỰC TẬP SINH ĐẾN TỪ',

            },
            {
                id2: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2023/thumbs/1500_crop_Hinh_3.jpg',
                productName2: 'BOSTON PHARMA KÝ KẾT HỢP TÁC VỚI VIỆN KIỂM NGHIỆM THUỐC',

            },
            {
                id3: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2023/thumbs/1500_crop_Banner.jpg',
                productName3: 'BOSTON PHARMA ĐƯỢC CHỨNG NHẬN TUÂN THỦ CÁC HƯỚNG DẪN',

            },
            {
                id4: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/08_2023/thumbs/1500_crop_thumbnail_calciboston500.jpg',
                productName4: 'BÍ QUYẾT BẢO VỆ XƯƠNG CHẮC KHỎE CHO CẢ GIA ĐÌNH',

            },
            {
                id5: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/08_2023/thumbs/1500_crop_EN_Thong_bao.jpg',
                productName5: 'THÔNG BÁO LỊCH NGHỈ LỄ QUỐC KHÁNH 2/9',

            },
            {
                id6: "Tìm hiểu thêm",
                imageUrl: 'https://bostonpharma.com.vn/vnt_upload/news/09_2023/thumbs/1500_crop_hinh_molravir.jpg',
                productName6: 'BOSTON PHARMA ĐỒNG HÀNH CÙNG CHIẾN DỊCH THANH NIÊN',

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
                        <h1>LỄ CÔNG BỐ PCP ĐẠT MỤC TIÊU</h1>
                        <hr></hr>
                        <p>Ngày 30/9/2023 vừa qua, tại Trung tâm Hội nghị White Palace, Boston Pharma đã tổ chức thành công Hội nghị khách hàng 2023 khu vực Hồ Chí Minh – Miền Đông hướng đến mục tiêu “Hợp tác bền vững – Cùng nhau phát triển”.</p>
                        <button className="timhieuthem">TÌM HIỂU HÊM</button>
                    </div>
                </div>
            </div >
            <div>
                <ProductList_2 products={initialState.products} />

            </div>
            <div className='Chuyentrang'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <Link className="page-link" to="/event">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>1</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event1`}>2</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>3</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>4</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>5</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>6</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to="" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <main>
                <Routes>
                    <Route path="/event" element={Event} />
                    <Route path="/event2" element={<Event_2 />} />
                    <Route path="/event1" element={<Event_1 />} />
                </Routes>
            </main>
        </div >
    )
}
export default Event_2;