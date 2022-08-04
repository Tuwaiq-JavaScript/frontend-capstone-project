export function ChattPage() {
    return (
        <>
            <div className="wrapper">
                <div className="title">
                    <h2>الدردشة</h2>
                </div>
                <div className="chat">
                    <div className="left">
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input placeholder="Search"></input>
                        </div>
                        <div className="persona-container">
                            <div className="persona box selected">
                                <img src="https://media-exp1.licdn.com/dms/image/D4D35AQEas4EsfKUZxQ/profile-framedphoto-shrink_100_100/0/1624947890919?e=1660147200&v=beta&t=HlH3g-nsVzSd_q67pW0bZeX7_uwTDZNa3BOAhor-LHc" />
                                <div className="info-section">
                                    <span className="info-name">عيسى ال الشهي </span>
                                    <span className="info-message">
                                        <span>مطور جافا سكريب, اكاديمية طويق</span>
                                    </span>
                                </div>
                                <div className="detail-section">
                                    <span className="detail-date">05 Apr</span>
                                </div>
                            </div>

                            <div className="persona box">
                                <img src="https://media-exp1.licdn.com/dms/image/D4E35AQFrMtH96U3-aw/profile-framedphoto-shrink_400_400/0/1652017234814?e=1660219200&v=beta&t=NKlQZIzdEipUMHh3rZMpB8fIdjrfQK4TU3pf1wn_Wtk" />
                                <div className="info-section">
                                    <span className="info-name"> مشعل الشمري</span>
                                    <span className="info-message">Get money, get paid hehe</span>
                                </div>
                                <div className="detail-section">
                                    <span className="detail-date">05 Apr</span>
                                </div>
                            </div>

                            <div className="persona box unread">
                                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHkP1LKOttbIQ/profile-displayphoto-shrink_100_100/0/1617645254752?e=1665014400&v=beta&t=DdEwZXzEDpYvgUT1KCCE9riWF_OoNHWjDYi3oJmkrNI" />
                                <div className="info-section">
                                    <span className="info-name">علي الحربي</span>
                                    <span className="info-message">Student at Tuwieq</span>
                                </div>
                                <div className="detail-section">
                                    <span className="detail-date">05 Apr</span>
                                </div>
                            </div>





                        </div>
                    </div>

                    <div className="right">
                        <div className="chat-person">
                            <h3>Linked in clone group</h3>
                        </div>
                        <div className="chat-messages">
                            <div className="message msg-me">السلام عليكم</div>
                            <div className="msg-me-time">16: - 07 April 2019</div>
                            <div className="message msg-other">وعليكم السلام </div>
                            <div className="msg-other-time">16:40 - 07 April 2019</div>
                            <div className="message msg-other">هلا عيسى </div>
                            <div className="msg-other-time">16:41 - 07 April 2019</div>

                            <div className="message msg-me">شباب احد فيكم يعرف كيف اقدم على معسكر جافاسكريبت؟</div>

                            <div className="message msg-me">!اي سهل ياولد ,انت ماشفت حسابهم في تويتر!</div>
                            <div className="msg-me-time">16:43 - 07 April 2019</div>
                            <div className="message msg-other">اي صح ماشفت</div>
                            <div className="msg-other-time">16:45 - 07 April 2019</div>
                            <div className="message msg-other">فيه لهم موقع خاص في الاكاديمية</div>
                            <div className="msg-other-time">10:13 - 08 April 2019</div>
                            <div className="message msg-other">ما اقدر اروح لهم واقدم؟</div>
                            <div className="msg-other-time">10:13 - 08 April 2019</div>
                            <div className="message msg-me">لا ماتقدر</div>
                            <div className="msg-me-time">10:17 - 08 April 2019</div>
                            <div className="message msg-other">تمام ممتاز ماقصرت, طيب مافيه دورات او احد منكم جرب يدخل</div>
                            <div className="msg-other-time">10:19 - 08 April 2019</div>
                            <div className="message msg-me">اكيد فيه, انا جربت وانصحك فيها</div>
                            <div className="msg-me-time">10:20 - 08 April 2019</div>
                        </div>

                        <div className="emoji-container box">
                            <div className="emoji-selection"></div>
                            <div className="emoji-categories">
                                <span className="emoji category selected-category">😃</span>
                                <span className="emoji category">🐻</span>
                                <span className="emoji category">💡</span>
                                <span className="emoji category">🏠</span>
                                <span className="emoji category">🕐</span>
                            </div>
                        </div>
                        <div className="chat-input box">
                            <i id="emojiBtn" className="far fa-smile"></i>
                            <input placeholder="Type a message..." />
                            <div className="chat-send-btn">Send</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}