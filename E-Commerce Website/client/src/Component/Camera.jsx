import React from 'react'
import Detailsbox from './Detailsbox';
import Cameracards from '../Data/Cameracards';
import {Laptopcard} from './Card';

const Camera=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Camera</h1>
                </div>
                <div>
                    {
                        Cameracards.map((val) => {
                            return (
                                <Laptopcard id={val.id} imgsrc={val.image} price={val.price} cname={val.name} list={val.list}></Laptopcard>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}

export default Camera;