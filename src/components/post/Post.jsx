import React, { useState } from 'react'
import './post.css'
import profilepic from '../../assets/person/1.jpeg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import postimage1 from "../../assets/post/1.jpeg"
import Like from '../../assets/like.png'
import Heart from '../../assets/heart.png'
import {Users} from '../../dummyData'


function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler = ()=>{
        setLike((prevLike) => (isLiked ? prevLike - 1 : prevLike + 1));
        setIsLiked((prevIsLiked) => !prevIsLiked);
        console.log(like)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" className='postProfileImg'/>
                    <span className='postUsername'>
                        {Users.filter((u)=> u.id === post.userId)[0].username}   {/* important logic */}
                    </span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={Heart} alt="" className='likeIcon' onClick={likeHandler} />
                    <img src={Like} alt="" className='likeIcon' onClick={likeHandler}/>
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post