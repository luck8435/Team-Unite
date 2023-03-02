import React, { useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className='InfoCard'>
            <div className="InfoHead">
                <h1>Your Info</h1>
                <div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
                    <ProfileModal modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                    />
                </div>
            </div>
            <div className="Info">
                <span>
                    <b>Status </b>
                </span>
                <span>In Relationship</span>
            </div>
            <div className="Info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Bhilai</span>
            </div>
            <div className="Info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Microsoft</span>
            </div>

            <button className='button logout-button'>Logout</button>
        </div>
    )
}

export default InfoCard