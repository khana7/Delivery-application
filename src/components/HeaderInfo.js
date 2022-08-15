import React from "react";
import './HeaderInfo.css';

const HeaderInfo = () => {
    return (
        <section className="header_info">
            <div className="container">
            <div className="header_info_content">
                <div className="header_info_left">
                    <div className="header_info_title">
                        <h3>Beautiful food & takeaway, <span>delivered</span> to your door.</h3>
                    </div>
                        <div className="header_info_text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                            </p>
                        </div>
                                <button className="header_info_button">
                                        <div className="header_info_btn">Place an Order</div>
                                </button>
                                    <div className="feedbacks_image">
                                        <img className="feedbacks_img" src ={require('../img/pilot.png')}/>
                                    </div>
                </div>

                <div className="header_info_right">
                    <img className="burger_image" src ={require('../img/burger.png')}/>
                </div>
            </div> 
                
            </div>


        </section>
    )
}

export default HeaderInfo;
