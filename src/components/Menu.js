import React from "react";
import './Menu.css';

const Menu = () => {
    return (
        <section className="menu">
            <div className="container">
                <div className="menu_title">Browse our menu</div>
                    <div className="menu_text">Use our menu to place an order online, or <span>phone</span> our store<br/> to place a pickup order. 
                                                Fast and fresh food.</div>
                        <button className="menu_button1">
                            <div className="menu_burgers_btn">Burgers</div>
                        </button>
                                <button className="menu_button2">
                                    <div className="menu_sides_btn">Sides</div>
                                </button>
                                        <button className="menu_button3">
                                            <div className="menu_drinks_btn">Drinks</div>
                                        </button>


                

                <div className="menu_cards">
                    <div className="menu_cards_left">
                        <div className="burger_dreams">
                            <div className="burger_dreams_image">
                                <img className="burger_dreams_img" src ={require('../assets/img/burger_dreams.png')}/>
                            </div>
                                    <div className="burger_dreams_content">
                                        <div className="dreams_content">
                                            <div className="burger_dreams_title">Burger Dreams</div>
                                                <div className="burger_dreams_price">$ 9.20 USD</div>
                                        </div>
                                                    <div className="burger_dreams_text">Lorem Ipsum is simply dummy text of the printing 
                                                                    and typesetting industry.</div>
                                                        <div className="burger_dreams_amount_info">
                                                            <div className="burger_dreams_amount">1</div>
                                                                <button className="burger_dreams_add_button">Add to card</button>
                                                        </div>
                                    </div>
                        </div>


                        <div className="burger_dreams">
                            <div className="burger_dreams_image">
                                <img className="burger_dreams_img" src ={require('../assets/img/burger_cali.png')}/>
                            </div>
                                    <div className="burger_dreams_content">
                                        <div className="dreams_content">
                                            <div className="burger_dreams_title">Burger Cali</div>
                                                <div className="burger_dreams_price">$ 8.00 USD</div>
                                        </div>
                                                <div className="burger_dreams_text">Lorem Ipsum is simply dummy text of the printing 
                                                                    and typesetting industry.</div>
                                                    <div className="burger_dreams_amount_info">
                                                        <div className="burger_dreams_amount">1</div>
                                                            <button className="burger_dreams_add_button">Add to card</button>
                                                    </div>
                                    </div>
                        </div>


                        <div className="burger_dreams">
                            <div className="burger_dreams_image">
                                <img className="burger_dreams_img" src ={require('../assets/img/burger_spicy.png')}/>
                            </div>
                                    <div className="burger_dreams_content">
                                        <div className="dreams_content">
                                            <div className="burger_dreams_title">Burger Spicy</div>
                                                <div className="burger_dreams_price">$ 9.20 USD</div>
                                        </div>
                                                <div className="burger_dreams_text">Lorem Ipsum is simply dummy text of the printing 
                                                                    and typesetting industry.</div>
                                                    <div className="burger_dreams_amount_info">
                                                        <div className="burger_dreams_amount">1</div>
                                                            <button className="burger_dreams_add_button">Add to card</button>
                                                    </div>
                                    </div>
                        </div>


                    </div>



                    <div className="menu_cards_right">
                        <div className="burger_dreams">
                            <div className="burger_dreams_image">
                                <img className="burger_dreams_img" src ={require('../assets/img/burger_waldo.png')}/>
                            </div>
                                    <div className="burger_dreams_content">
                                        <div className="dreams_content">
                                            <div className="burger_dreams_title">Burger Waldo</div>
                                                <div className="burger_dreams_price">$ 10.00 USD</div>
                                        </div>
                                                <div className="burger_dreams_text">Lorem Ipsum is simply dummy text of the printing 
                                                                    and typesetting industry.</div>
                                                    <div className="burger_dreams_amount_info">
                                                        <div className="burger_dreams_amount">1</div>
                                                            <button className="burger_dreams_add_button">Add to card</button>
                                                    </div>
                                    </div>
                        </div>


                        <div className="burger_dreams">
                            <div className="burger_dreams_image">
                                <img className="burger_dreams_img" src ={require('../assets/img/burger_bacon.png')}/>
                            </div>
                                    <div className="burger_dreams_content">
                                        <div className="dreams_content">
                                            <div className="burger_dreams_title">Burger Bacon Buddy</div>
                                                <div className="burger_dreams_price">$ 9.99 USD</div>
                                        </div>
                                                <div className="burger_dreams_text">Lorem Ipsum is simply dummy text of the printing 
                                                                    and typesetting industry.</div>
                                                    <div className="burger_dreams_amount_info">
                                                        <div className="burger_dreams_amount">1</div>
                                                            <button className="burger_dreams_add_button">Add to card</button>
                                                    </div>
                                    </div>
                        </div>


                        <div className="burger_dreams">
                            <div className="burger_dreams_image">
                                <img className="burger_dreams_img" src ={require('../assets/img/burger_classic.png')}/>
                            </div>
                                    <div className="burger_dreams_content">
                                    <div className="dreams_content">
                                            <div className="burger_dreams_title">Burger Classic</div>
                                                <div className="burger_dreams_price">$ 8.00 USD</div>
                                    </div>
                                                <div className="burger_dreams_text">Lorem Ipsum is simply dummy text of the printing 
                                                                    and typesetting industry.</div>
                                                    <div className="burger_dreams_amount_info">
                                                        <div className="burger_dreams_amount">1</div>
                                                            <button className="burger_dreams_add_button">Add to card</button>
                                                    </div>
                                    </div>
                        </div>


                    </div>
            </div>

            <button className="burger_dreams_button">
                <div className='burger_dreams_btn'>See Full Menu</div>
            </button>
                
               
            </div>
        </section>
    )

}

export default Menu;