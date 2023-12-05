import React from 'react'
import './share.css'
import Profileimg from '../../assets/person/1.jpeg'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className="shareTop">
                <img className="shareProfileImg" src={Profileimg} alt="" />
                <input
                    placeholder="What's in your mind Safak?"
                    className="shareInput"
                />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <InsertEmoticonIcon htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                    
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share