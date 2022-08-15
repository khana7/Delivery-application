import React from "react";
import './HeaderMenu.css';


const HeaderMenu = () => {
    return (
        <section className="header">
            <div className="container">
                
                <div className="header_menu">
                    <div className="header_image">
                        <img className="logo_img" src ={require('../img/logo.png')}/>
                    </div>
                
                    <div className="header_nav">
                        <ul className="header_nav_list">              
                            <li><span>Home</span></li>
                            <li>Order</li>
                            <li>Company</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>

                        <div className="burger_menu">
                            <img src ={require('../assets/icons/burger.png')}/>
                        </div>

                    
                        
                    
                    <div className="header_market_image">
                        <img className="market_image" src ={require('../img/market.png')}/>
                            {/* <div className="header_market_circle">
                                <img className="circle_image" src ={require('../img/circle.png')}/>
                            </div> */}
                        </div>
                    </div>
                    
                </div>

        </div>
    </section>

    )
}

export default HeaderMenu;
