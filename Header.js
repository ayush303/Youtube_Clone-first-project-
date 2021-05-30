import React, { useState } from "react";
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar"
import {Link} from "react-router-dom";
function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link>
                    <img
                        className="header_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/52/Youtube_logo_%28197x87%29.jpg"
                        alt=""
                    />
                </Link>
                
            </div>
            <div className="header__input">
                <input 
                    onChange={e => setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    placeholder="Search" 
                    type="text"     
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationIcon className="header_icon"/>
                <Avatar
                    alt="Ayush Pandey"
                />
            </div>
            
        </div>
    )
}

export default Header
