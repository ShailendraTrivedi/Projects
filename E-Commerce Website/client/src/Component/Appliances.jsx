import React from 'react';  
import Detailsbox from './Detailsbox';
import { NavLink } from 'react-router-dom';
import ReactSPCardsSlider from 'react-sp-cards-slider';
import { Fridgecards,microwave,chimney,Washingmachine,Televisioncards,AC} from '../Data/Electronicsheading';


const Mobiles = () => {
    return (
        <>
            <Detailsbox></Detailsbox>

            <div className="laptoppage">

                {/* ----------------- Television ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Television</h1>
                        <NavLink to="/television"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Televisioncards} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/television" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Frigde ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Refrigrator</h1>
                        <NavLink to="/refrigrator"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Fridgecards} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/refrigrator" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- AC ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Air Conditioner</h1>
                        <NavLink to="/ac"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={AC} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/ac" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Washing Machine ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Washing Machine</h1>
                        <NavLink to="/washingmachine"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={Washingmachine} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/washingmachine" style={{ display: "block", boxSizing: "border-box" }}>
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

                 {/* ----------------- Microwave ------------------------------------ */}
                 <div className="cardcategory">
                    <div className="titleview">
                        <h1>Microwave</h1>
                        <NavLink to="/microwave"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={microwave} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/microwave" style={{ display: "block", boxSizing: "border-box" }}>
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
                {/* ----------------- Chimney ------------------------------------ */}
                <div className="cardcategory">
                    <div className="titleview">
                        <h1>Chimney</h1>
                        <NavLink to="/chimney"><button>View All</button></NavLink>
                    </div>
                    <div style={{ maxWidth: "1500px", margin: "20px auto" }}>

                        <ReactSPCardsSlider items={chimney} step={3}
                            itemRenderer={({ image, name }) => {
                                return (
                                    <NavLink to="/chimney" style={{ display: "block", boxSizing: "border-box" }}>
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

export default Mobiles;