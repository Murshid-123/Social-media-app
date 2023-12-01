import React from 'react'
import topbar from "../../components/topbar/Topbar";
import sidebar from "../../components/sidebar/Sidebar";
import feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import "./home.css"

function home() {
  return (
        <div>
            <topbar />
            <div className="homeContainer">
                <sidebar />
                <feed/>
                <rightbar/>
            </div>
        </div>
    
  )
}

export default home