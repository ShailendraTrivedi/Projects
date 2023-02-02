import React from 'react'
import Detailsbox from './Detailsbox';
import Laptopcards from '../Data/Laptopcards';
import {Laptopcard} from './Card';

const Laptop=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Laptop</h1>
                </div>
                <div >
                    {
                        Laptopcards.map((val) => {
                            return (
                                <Laptopcard id={val.id} imgsrc={val.image} cname={val.name} list={val.list} price={val.price}></Laptopcard>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}

export default Laptop;