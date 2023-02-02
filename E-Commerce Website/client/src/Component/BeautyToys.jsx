import React from 'react';
import Detailsbox from './Detailsbox';
import { NavLink } from 'react-router-dom';
import ReactSPCardsSlider from 'react-sp-cards-slider';
import { Toy,Food,Fitness,Beauty} from '../Data/Electronicsheading';


const BeautyToys = () => {
    return (
        <>
            <Detailsbox></Detailsbox>

            <div className="laptoppage">

                {/* ----------------- Beauty ------------------------------------ */}
                <div className="cardcategory">
                <div className="titleview">
                    <h1>Beauty</h1>
                    <NavLink to="/beauty"><button>View All</button></NavLink>
                </div>
                <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                    <ReactSPCardsSlider  items={Beauty} step={3}
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
                {/* ----------------- Food Product ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Food Product</h1>
                        <NavLink to="/food"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Food} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/food" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Sports Fitness ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Sport Fitness</h1>
                        <NavLink to="/fitness"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Fitness} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/fitness" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Toys ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Toys</h1>
                        <NavLink to="/toy"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Toy} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/toy" style={{ display: "block", boxSizing: "border-box" }}>
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

            </div>



        </>
    )
}

export default BeautyToys;