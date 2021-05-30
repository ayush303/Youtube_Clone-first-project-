import React from 'react'
import './Sidebar.css';
import HomeIcon from "@material-ui/icons/Home";
import WhatShotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="Sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatShotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
            <hr />
        </div>
    )
}

export default Sidebar
