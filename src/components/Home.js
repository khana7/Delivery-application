import React from "react";
import './Home.css';

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home_info">
                <div className="home_left">
                <div className="home_title">The home of fresh products</div>
                    <div className="home_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                    </div>
                        <button className="home_button">
                            <div className="home_btn">Learn about us</div>
                        </button>
                </div>

                <div className="home_right">
                    <img className="home_macaron_image" src ={require('../assets/img/macarons.png')}/>

                </div>
                </div>
            </div>
        </section>
    )
}

export default Home;