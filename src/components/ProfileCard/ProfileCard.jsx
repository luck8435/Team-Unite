import React from 'react';
import './ProfileCard.css'
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
        <div className="ProfileImages">
            <img src={Cover} alt='' />
            <img src={Profile} alt='' />
        </div>

        <div className="ProfileName">
            <span>Zendaya MJ</span>
            <span>Senior UI/UX Designer</span>
        </div>
        <div className="FollowStatus">
            <hr />
            <div className="Follow">
                <span>6,890</span>
                <span>Following</span>
            </div>
            <div className="vl"></div>
            <div className="Follow">
                <span>1</span>
                <span>Followers</span>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default ProfileCard