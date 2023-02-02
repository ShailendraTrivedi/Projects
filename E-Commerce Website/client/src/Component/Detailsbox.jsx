import React from 'react'
import Sdata from '../Data/Sdata';
import ReactSPCardsSlider from 'react-sp-cards-slider';
import { NavLink } from 'react-router-dom';

const Detailsbox = () => {
    return (
        <>
            <div className="detailsbox" >
                <ReactSPCardsSlider items={Sdata} step={1}
                    itemRenderer={({ image, name,link }) => {
                        return (
                            <NavLink to={link} style={{ display: "block", boxSizing: "border-box", paddingBottom: "20px" }}>
                                <div className="img-box">
                                    <img src={image} alt={name} className="sp-preview" />
                                    <div>{name}</div>
                                </div>
                            </NavLink>
                        );
                    }}

                    itemWidth={210}
                    mainWidthLimit={1136}
                    breakpoints={{
                        lg: 1350,
                    }}
                />
            </div>
        </>
    )
}

export default Detailsbox;