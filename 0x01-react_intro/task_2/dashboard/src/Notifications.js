import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png"

function Notifications() {
    return (
        <div className="Notifications">
            <buttuon 
            style={{color: "#3a3a3a", fontWeight: "bold", background: "none",border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
            aria-label="close"
            onClick={console.log("Close button has been clicked")}>
                <img src={closeIcon} alt="closeIcon" width='10px'/>
            </buttuon>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="defult">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;