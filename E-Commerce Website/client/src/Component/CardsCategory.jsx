import React from 'react'
import ReactSPCardsSlider from 'react-sp-cards-slider';
import Electronicscards from '../Data/Electronicscards'
import './../CSS/cardscategory.css';
import { NavLink } from 'react-router-dom';
import {Beautycards,Grocerycards,Fashioncards} from '../Data/Cardscategorycards';
import {Mobilescardsheading} from '../Data/Electronicsheading';







const CardsCategory = () => {

    return (
        <>
        {/* --------------------------------- Mobiles ---------------------------------------------- */}

            <div className="cardcategory">
                <div className="titleview">
                    <h1>Mobiles</h1>
                    <NavLink to="/mobiles"><button>View All</button></NavLink>
                </div>
                <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                    <ReactSPCardsSlider  items={Mobilescardsheading} step={3}
                        itemRenderer={({ image, name }) => {
                            return (
                                <NavLink  to="/mobiles" style={{ display: "block", boxSizing: "border-box" }}>
                                    <div className="imgbox">
                                        <img src={image} alt={name} className="sp-preview" />
                                        <div className="card_info">{name}</div>

                                    </div>
                                </NavLink>
                            );
                        }}
                        itemWidth={200}
                        itemsPadding={20}
                        mainWidthLimit={1136}
                        breakpoints={{
                            lg: 1350,
                        }}
                    />
                </div>
            </div>
        {/* --------------------------------- Electronics ---------------------------------------------- */}
        
        <div className="cardcategory">
                <div className="titleview">
                    <h1>Electronics</h1>
                    <NavLink to="/electronics"><button>View All</button></NavLink>
                </div>
                <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                    <ReactSPCardsSlider  items={Electronicscards} step={3}
                        itemRenderer={({ image, name }) => {
                            return (
                                <NavLink to="/electronics" style={{ display: "block", boxSizing: "border-box" }}>
                                    <div className="imgbox1">
                                        <div className="imgbox2"><img src={image} alt={name} className="sp-preview" /></div>
                                        <div className="card_info">{name}</div>

                                    </div>
                                </NavLink>
                            );
                        }}
                        itemWidth={200}
                        itemsPadding={20}
                        mainWidthLimit={1136}
                        breakpoints={{
                            lg: 1350,
                        }}
                    />
                </div>
        </div>
        {/* --------------------------------- Grocery ---------------------------------------------- */}
        
        <div className="cardcategory">
                <div className="titleview">
                    <h1>Grocery</h1>
                    <NavLink to="/grocery"><button>View All</button></NavLink>
                </div>
                <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                    <ReactSPCardsSlider  items={Grocerycards} step={3}
                        itemRenderer={({ image, name }) => {
                            return (
                                <NavLink to="/grocery" style={{ display: "block", boxSizing: "border-box" }}>
                                    <div className="imgbox_grocery">
                                    <div className="imgbeauty">
                                        <img src={image} alt={name} className="sp-preview" />
                                        </div>
                                        <div className="card_info">{name}</div>

                                    </div>
                                </NavLink>
                            );
                        }}
                        itemWidth={200}
                        itemsPadding={20}
                        mainWidthLimit={1136}
                        breakpoints={{
                            lg: 1350,
                        }}
                    />
                </div>
            </div>
        {/* --------------------------------- Fashion ---------------------------------------------- */}
        
        <div className="cardcategory">
                <div className="titleview">
                    <h1>Fashion</h1>
                    <NavLink to="/fashion"><button>View All</button></NavLink>
                </div>
                <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                    <ReactSPCardsSlider  items={Fashioncards} step={3}
                        itemRenderer={({ image, name }) => {
                            return (
                                <NavLink to="/fashion" style={{ display: "block", boxSizing: "border-box" }}>
                                    <div className="imgbox_grocery">
                                    <div className="imgbeauty">
                                        <img src={image} alt={name} className="sp-preview" />
                                        </div>
                                        <div className="card_info">{name}</div>

                                    </div>
                                </NavLink>
                            );
                        }}
                        itemWidth={200}
                        itemsPadding={20}
                        mainWidthLimit={1136}
                        breakpoints={{
                            lg: 1350,
                        }}
                    />
                </div>
            </div>
            {/* --------------------------------- Beauty ---------------------------------------------- */}
        
        <div className="cardcategory">
                <div className="titleview">
                    <h1>Beauty</h1>
                    <NavLink to="/beauty"><button>View All</button></NavLink>
                </div>
                <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                    <ReactSPCardsSlider  items={Beautycards} step={3}
                        itemRenderer={({ image, name }) => {
                            return (
                                <NavLink to="/beauty" style={{ display: "block", boxSizing: "border-box" }}>
                                    <div className="imgbox_beauty">
                                        <div className="imgbeauty">
                                        <img src={image} alt={name} className="sp-preview" />
                                        </div>
                                        <div className="card_info">{name}</div>

                                    </div>
                                </NavLink>
                            );
                        }}
                        itemWidth={200}
                        itemsPadding={20}
                        mainWidthLimit={1136}
                        breakpoints={{
                            lg: 1350,
                        }}
                    />
                </div>
            </div>
        </>
    )
};

export default CardsCategory;
