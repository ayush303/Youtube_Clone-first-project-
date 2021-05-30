import React from "react"
import ChannelRow from "./ChannelRow.js"
import VideoRow from "./VideoRow.js"
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image = "https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj"
                Channel = "Clever Programmer"
                verified
                subs = "956k"
                noOfVideos = {382}
                description = "You can find awesome programming lessons here! Also expect programming tips and tricks that will take your coding skills to the..."
            />

            <hr />

            <VideoRow 
                views="2M"
                subs="956k"
                description="Do you want to become Python Developer & make an income? Just Watch it "
                timestamp="10 months ago"
                channel="Clever Programmer"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                image="https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=CM_Pz4UG&rs=AOn4CLDGj-nboxG8mca62lV26WTxDjgbCw"
            />

        </div>
    )
}

export default SearchPage
