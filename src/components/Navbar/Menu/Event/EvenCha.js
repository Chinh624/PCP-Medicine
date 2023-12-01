import './even.css';
import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import Event from './event';
import Event_3 from './event3';
import Event_4 from './event4';
import Event_5 from './event5';
import Event_2 from './event2';
import Event_1 from './event1';

function EventCha() {
    const navigate = useNavigate();
    const location = useLocation();

    const goToNextPage = () => {
        const currentPage = parseInt(location.pathname.substr(-1));
        const nextPage = currentPage + 1;

        // Kiểm tra nếu trang hiện tại là trang cuối cùng thì chuyển đến trang đầu tiên
        if (currentPage < 5) {
            navigate(`/event${nextPage}`);
        } else {
            navigate("/event1");
        }
    };

    const goToPreviousPage = () => {
        const currentPage = parseInt(location.pathname.substr(-1));

        if (currentPage === 1) {
            navigate("/event");
        } else {
            const previousPage = currentPage - 1;
            if (previousPage > 0) {
                navigate(`/event${previousPage}`);
            }
        }
    };

    return (
        <div className="khungchua">
            <main>
                <Routes>
                    <Route path="/" element={<Event />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/event1" element={<Event_1 />} />
                    <Route path="/event2" element={<Event_2 />} />
                    <Route path="/event3" element={<Event_3 />} />
                    <Route path="/event4" element={<Event_4 />} />
                    <Route path="/event5" element={<Event_5 />} />
                </Routes>
            </main>
            <div className="Chuyentrang">
                <nav aria-label="Điều hướng trang">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" onClick={goToPreviousPage} aria-label="Quay lại">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>

                        <li className="page-item"><Link className="page-link" to={`/event1`}>1</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event2`}>2</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event3`}>3</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event4`}>4</Link></li>
                        <li className="page-item"><Link className="page-link" to={`/event5`}>5</Link></li>
                        <li className="page-item">
                            <button className="page-link" onClick={goToNextPage} aria-label="Tiếp theo">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default EventCha;
