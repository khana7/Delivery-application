import React from "react";
import './Order.css';

const Order = () => {
    return (
        <section className='order'>
            <div className='container'>
                <div className='order_content'>    
                    <div className='order_left'>
                        <img className="order_left_img" src ={require('../assets/img/double_phone.png')}/>
                    </div>

                    <div className="order_right">
                        <div className='order_right_title'>Order online with <br/> our simple checkout.</div>
                        <div className='order_right_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</div>
                        <button className="order_right_button">
                            <div className='order_right_btn'>See our FAQ</div>
                        </button>

                    </div>

                
                </div>
            </div>
        </section>
    )
}
export default Order;