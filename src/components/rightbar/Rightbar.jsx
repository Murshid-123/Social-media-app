import React from 'react'
import './rightbar.css'
import gift from '../../assets/gift.png'
import ad from '../../assets/ad.png'
import profilepic from '../../assets/person/3.jpeg'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import { image1, image2, image3, image4, image5, image6 } from '../../assets/image'


function Rightbar({profile}) {
  

    const HomeRightbar = () => {
      return (
        <>
          <div className="birthdayContainer">
            <img className="birthdayImg" src={gift} alt="" />
            <span className="birthdayText">
              <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
            </span>
          </div>
          <img className="rightbarAd" src={ad} alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </>
      );
    };

    const ProfileRightbar = () =>{

      return(
        <>
          <h4 className="rightbarTitle">User information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src={image1}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={image2}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={image3}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={image4}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={image5}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={image6}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
        </div>
        </>
      )

    }

    return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
          
      </div>
    </div>
  )
}

export default Rightbar