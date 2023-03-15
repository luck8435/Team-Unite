import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import * as UserApi from '../../api/UserRequest.js';
import { useParams } from 'react-router-dom';
import { logOut } from '../../actions/AuthAction';

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();

    const profileUserId = params.id;
    const [profileUser, setProfileUser] = useState({});

    const handleLogout = () => {
        dispatch(logOut());
    }

    const { user } = useSelector((state) => state.authReducer.authData);

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user);
            }
            else {
                const profileUserInfo = await UserApi.getUser(profileUserId);
                setProfileUser(profileUserInfo);
            }
        }
        fetchProfileUser();
    }, [user]);

    return (
        <div className='InfoCard'>
            <div className="InfoHead">
                <h1>Profile Info</h1>
                {user._id === profileUserId ? (<div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
                    <ProfileModal modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                        data = {user}
                    />
                </div>): ("")}

            </div>
            <div className="Info">
                <span>
                    <b>Status </b>
                </span>
                {console.log(profileUser)}
                <span>{profileUser.relationship}</span>
            </div>
            <div className="Info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>{profileUser.livesIn}</span>
            </div>
            <div className="Info">
                <span>
                    <b>Works at </b>
                </span>
                <span>{profileUser.worksAt}</span>
            </div>

            <button className='button logout-button' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default InfoCard