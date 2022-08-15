import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className='footer_content'>
                    <div className="footer_left">
                        <img className="footer_logo" src ={require('../img/logo.png')}/>
                            <div className="footer_logo_text">Takeaway & Delivery template
                                                    for small - medium businesses.</div> 
                    </div>

                    <div className="footer_right">
                        <div className="footer_right_card">
                            <div className="footer_right_title">company</div>
                                <ul className="footer_right_list">
                                    <li>Home</li>
                                    <li>Order</li>
                                    <li>FAQ</li>
                                    <li>Contact</li>
                                </ul>
                        </div>


                        <div className="footer_right_card">
                            <div className="footer_right_title">template</div>
                                <ul className="footer_right_list">
                                    <li>Style Guide</li>
                                    <li>Changelog</li>
                                    <li>Licence</li>
                                    <li>Webflow University</li>
                                </ul>
                        </div>

                        <div className="footer_right_card">
                            <div className="footer_right_title">flowbase</div>
                                <ul className="footer_right_list">
                                    <li>More Cloneables</li>
                                    
                                </ul>
                        </div>
                    </div>
                </div>

                <div className="footer_end">
                    <div className='footer_end_text'>
                    Built by <span>Flowbase</span> · Powered by <span>Webflow</span>
                    </div>

                    <div className="footer_social">
                        <img className="footer_social_image" src ={require('../assets/img/instagram.png')}/>
                        <img className="footer_social_image" src ={require('../assets/img/twitter.png')}/>
                        <img className="footer_social_image" src ={require('../assets/img/youtube.png')}/>

                    </div>
                </div>
                

            </div>
        </section>
            )
}
export default Footer;