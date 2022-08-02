import React from 'react'
import Avatar from "@mui/material/Avatar";
import '../styles/Home.css'

export default function VideoCard({ title, views, timestamp, channelImage, channel, image}: { title: string, views: string, timestamp: string, channelImage: string, channel: string, image: string }) {
    return (
        <div className="videoCard">
            <img className="videoCard_thumbnail" src={image} alt="" />
            <div className="videoCard_info">
                <Avatar className="videoCard_avatar"
                    src={channelImage}
                    alt={channel} />
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views}*{timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

