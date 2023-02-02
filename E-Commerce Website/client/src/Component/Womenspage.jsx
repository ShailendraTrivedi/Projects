import React from 'react'
import Detailsbox from './Detailsbox';
import {Womens} from '../Data/Fashioncards';
import {Laptopcard} from './Card';

const Womenspage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Womens Ethnics </h1>
                </div>
                <div >
                    {
                        Womens.map((val) => {
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

export default Womenspage;