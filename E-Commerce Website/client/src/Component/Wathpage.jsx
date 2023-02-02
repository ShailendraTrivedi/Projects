import React from 'react'
import Detailsbox from './Detailsbox';
import {Watch} from '../Data/Fashioncards';
import {Laptopcard} from './Card';

const Watchpage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Watch </h1>
                </div>
                <div >
                    {
                        Watch.map((val) => {
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

export default Watchpage;;