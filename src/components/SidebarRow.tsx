import React from 'react'
import '../styles/index.css'


function SidebarRow({selected = false,title, Icon}:{ selected ?:boolean , title:String ,Icon:any}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className= "SidebarRow_icon" />
            <h1 className="SidebarRow_title">{title}</h1>
        </div>
    );
}

export default SidebarRow

