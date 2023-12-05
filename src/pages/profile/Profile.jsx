import React from 'react'
import './profile.css'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { postimage3,image7 } from '../../assets/image';

function Profile() {
  return (
    <div>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img
                            className="profileCoverImg"
                            src={postimage3}
                            alt=""
                        />
                        <img
                            className="profileUserImg"
                            src={image7}
                            alt=""
                        />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Safak Kocaoglu</h4>
                        <span className="profileInfoDesc">Hello my friends!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar Profile/>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Profile