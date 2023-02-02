import React from 'react'
import Detailsbox from './Detailsbox';
import {Mens} from '../Data/Fashioncards';
import {Laptopcard} from './Card';

const Menspage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Men's Top Wear </h1>
                </div>
                <div>
                    {
                        Mens.map((val) => {
                            return (
                                <Laptopcard price={val.price} id={val.id} imgsrc={val.image} cname={val.name} list={val.list}></Laptopcard>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}

export default Menspage;