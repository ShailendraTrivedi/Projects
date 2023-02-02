import React from 'react'
import Detailsbox from './Detailsbox';
import {Kidsfurniture} from '../Data/Homedecorcards';
import {Laptopcard} from './Card';

const Kidsfurniturepage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Kids Furniture</h1>
                </div>
                <div>
                    {
                        Kidsfurniture.map((val) => {
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

export default Kidsfurniturepage;