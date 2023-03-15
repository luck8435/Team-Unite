import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unFollowUser } from '../../actions/UserAction';

const User = ({ person }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id));
    const handleFollow = () => {
        following ?
            dispatch(unFollowUser(person._id, user))
            : dispatch(followUser(person._id, user));
        setFollowing((prev) => !prev);
    }
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className='Follower'>
            <div>
                <img
                    src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "defaultProfile.png"}
                    alt=''
                    className='FollowerImage' />
                <div className='Name'>
                    <span>{person.firstName}</span>
                    <span>{person.username}</span>
                </div>
            </div>
            <button className={following ? 'button fc-button UnFollowButton': 'button fc-button'} onClick={handleFollow}>
                {following ? "Unfollow" : "Follow"}
            </button>
        </div>
    )
}

export default User
