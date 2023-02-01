import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Header.css"
import { Badge } from '@mui/material';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
const Header = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <>
            <div className="header">
                <Link to="/" style={{ textDecoration: "none" }} >
                    <div className="header__logo">
                        <StorefrontOutlinedIcon className='header__logoImage' fontSize='large' />
                        <h2 className="header__logoTitle">e-SHOP</h2>
                    </div>
                </Link>
                <div className="header__search">
                    <input type="search" className='header__searchInput' />
                    <SearchOutlinedIcon className='header__searchIcon' />
                </div>
                <div className="header__nav">
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <div className="nav__item">
                            <span className="nav__itemLineOne">Hello, </span>
                            <span className="nav__itemLineOne">Sigh In</span>
                        </div>
                    </Link>
                    <div className="nav__item">
                        <span className="nav__itemLineTwo">Your</span>
                        <span className="nav__itemLineTwo">Shop</span>
                    </div>
                    <Link to="/checkout" style={{ textDecoration: "none" }} >
                        <div className="nav__item ">
                            <Badge badgeContent={basket.length} color="primary">
                                <LocalGroceryStoreIcon className='nav__itemBasket' />
                            </Badge>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header
