import React from 'react'
import Detailsbox from './Detailsbox';
import Washingmachinecards from '../Data/Washingmachinecards';
import {Laptopcard} from './Card';

const Washingmachine=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading ">
                    <h1 id="wmhead">Washing machine</h1>
                </div>
                <div>
                    {
                        Washingmachinecards.map((val) => {
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

export default Washingmachine;