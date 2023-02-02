import React from 'react'
import Detailsbox from './Detailsbox';
import {Cookwareproduct} from '../Data/Homedecorcards';
import {Laptopcard} from './Card';

const Cookware=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Cookware</h1>
                </div>
                <div>
                    {
                        Cookwareproduct.map((val) => {
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

export default Cookware;