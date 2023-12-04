import React, { useState } from 'react';
import Event from './event';
import Event_1 from './event1';
import Event_2 from './event2';
import Event_3 from './event3';
import Event_4 from './event4';
import Event_5 from './event5';

function EventchaEvent() {
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
        setCurrentPage((prevPage) => (prevPage < 6 ? prevPage + 1 : 1));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 6));
    };

    const renderEventPage = () => {
        switch (currentPage) {
            case 1:
                return <Event />;
            case 2:
                return <Event_1 />;
            case 3:
                return <Event_2 />;
            case 4:
                return <Event_3 />;
            case 5:
                return <Event_4 />;
            case 6:
                return <Event_5 />;

            default:
                return <Event />;
        }
    };

    return (
        <div className="khungchua">
            <main>{renderEventPage()}</main>
            <div className="Chuyentrang">
                <nav aria-label="Điều hướng trang">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" onClick={goToPreviousPage} aria-label="Quay lại">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        {[1, 2, 3, 4, 5, 6].map((page) => (
                            <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(page)}>
                                    {page}
                                </button>
                            </li>
                        ))}
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

export default EventchaEvent;


