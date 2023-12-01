import React from "react";
import "./ourteam.css";

export default function OurTeam() {
    return (
        <div className="body-ourteam">
            <div class="title-ourteam">
                Our Team - PCP Medicine
            </div>

            <section>
                <div className="team-member">
                    <div className="team-member-card">
                        <img src="team-member1.jpg" alt="Avatar 1" />
                        <h2>Phạm Đông Chinh</h2>
                        <p>Founder & CEO</p>
                    </div>

                    <div className="team-member-card">
                        <img src="team-member2.jpg" alt="Avatar 2" />
                        <h2>Phạm Tấn Hoàng</h2>
                        <p>Chief Medical Officer</p>
                    </div>

                    <div className="team-member-card">
                        <img src="team-member3.jpg" alt="Avatar 3" />
                        <h2>Cao Văn Thanh Tùng</h2>
                        <p>Head of Research</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
