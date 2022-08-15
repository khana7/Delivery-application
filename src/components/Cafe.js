import React from "react";
import './Cafe.css';

const Cafe = () => {
    return (
        <section className="cafe">
            <div className="container">
                <div className="cafe_info">
                    <div className="cafe_info_left">
                        <div className="cafe_info_left_title">Call our store and takeaway when it suits you best.
                        </div>
                            <div className="cafe_info_left_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</div>
                                <button className="cafe_info_left_button">
                                    <div className="cafe_info_left_btn">Ph. +61 233 2333</div>
                                </button>
                    </div>

                    <div className="cafe_info_right">
                        <img className="cafe_info_right_image" src ={require('../assets/img/cafe.png')}/>

                    </div>
                </div>
            </div>


        <div className="cafe_images">
            <div className="cafe_image">
                <img className="table_image" src ={require('../assets/img/table.png')}/>

            </div>

            <div className="cafe_image2">
                <span>Support</span> good food and local business
            </div>
        </div> 
        
{/* 
                <button className="order_button">
                    <div className="order_btn">Order Now</div>
                </button> */}

        </section>
        
    )
}
export default Cafe;