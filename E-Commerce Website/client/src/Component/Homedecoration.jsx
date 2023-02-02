import React from 'react';
import Detailsbox from './Detailsbox';
import { NavLink } from 'react-router-dom';
import ReactSPCardsSlider from 'react-sp-cards-slider';
import {Homedecor, Livingfurniture,Cookware,Kidsfurniture,Bedroomfurniture} from '../Data/Electronicsheading';


const Fashion = () => {
    return (
        <>
            <Detailsbox></Detailsbox>

            <div className="laptoppage">

                {/* ----------------- Bedroom Furniture ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Bedroom Furniture</h1>
                        <NavLink to="/bedroomfurniture"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Bedroomfurniture} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/bedroomfurniture" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Livingroom Furniture ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Livingroom Furniture</h1>
                        <NavLink to="/livingfurniture"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Livingfurniture} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/livingfurniture" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Kids Furniture ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Kids Furniture</h1>
                        <NavLink to="/kidsfurniture"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Kidsfurniture} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/kidsfurniture" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Home Decor ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Home Decor</h1>
                        <NavLink to="/homedecor"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Homedecor} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/homedecor" style={{ display: "block", boxSizing: "border-box" }}>
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

                {/* ----------------- Cookware ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Cookware</h1>
                        <NavLink to="/cookware"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Cookware} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/cookware" style={{ display: "block", boxSizing: "border-box" }}>
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

            </div>



        </>
    )
}

export default Fashion;