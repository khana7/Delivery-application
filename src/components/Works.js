import React from "react";
import './Works.css';

const Works = () => {
    return (
        <section className="works">
            <div className="container">
                <div className="works_title">How it works.</div>
                <div className="works_cards">
                    <div className="works_card">
                        <img className="works_card_image" src ={require('../assets/img/fries.png')}/>
                    <div className="works_card_title">Adapt your menu items</div>
                    <div className="works_card_text">Easily adapt your menu using the webflow CMS 
                                                    and allow customers to browse your items.</div>
                    </div>


                    <div className="works_card">
                        <img className="works_card_image" src ={require('../assets/img/phone.png')}/>
                    <div className="works_card_title">Accept online orders & takeout</div>
                    <div className="works_card_text">Let your customers order and pay via the powerful ecommerce system, 
                    or simple let them call your store.</div>
                    </div>

                    <div className="works_card">
                        <img className="works_card_image" src ={require('../assets/img/home.png')}/>
                    <div className="works_card_title">Manage delivery or takeout</div>
                    <div className="works_card_text">Manage your own logistics and take orders 
                    simply through the ecommerce system.</div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Works;