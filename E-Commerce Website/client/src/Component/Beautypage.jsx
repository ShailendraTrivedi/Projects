import React from 'react'
import Detailsbox from './Detailsbox';
import {Beauty} from '../Data/Beautycards';
import {Laptopcard} from './Card';

const Beautypage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Beauty</h1>
                </div>
                <div >
                    {
                        Beauty.map((val) => {
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

export default Beautypage;