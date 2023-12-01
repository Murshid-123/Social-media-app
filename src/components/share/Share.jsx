import React from 'react'
import './Share.css'
import Profileimg from '../../assets/person/1.jpeg'
import PermMediaIcon from '@mui/icons-material/PermMedia';

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
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share