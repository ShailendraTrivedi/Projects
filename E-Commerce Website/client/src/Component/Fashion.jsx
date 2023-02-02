import React from 'react';
import Detailsbox from './Detailsbox';
import { NavLink } from 'react-router-dom';
import ReactSPCardsSlider from 'react-sp-cards-slider';
import { Kids,Women,Watch,Men} from '../Data/Electronicsheading';


const Fashion = () => {
    return (
        <>
            <Detailsbox></Detailsbox>

            <div className="laptoppage">

                {/* ----------------- Men ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Men's Top wear</h1>
                        <NavLink to="/mentopwear"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Men} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/mentopwear" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Women ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Women's Ethnic</h1>
                        <NavLink to="/womens"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Women} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/womens" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Kids wear ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Kids Wear</h1>
                        <NavLink to="/kids"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Kids} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/kids" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Watch ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Watch</h1>
                        <NavLink to="/watch"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Watch} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/watch" style={{ display: "block", boxSizing: "border-box" }}>
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