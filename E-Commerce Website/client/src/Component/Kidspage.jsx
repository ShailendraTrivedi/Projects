import React from 'react'
import Detailsbox from './Detailsbox';
import {Kids} from '../Data/Fashioncards';
import {Laptopcard} from './Card';

const Kidspage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Kids Wear </h1>
                </div>
                <div >
                    {
                        Kids.map((val) => {
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

export default Kidspage;;