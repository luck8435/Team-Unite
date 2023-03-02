import React, { useState, useRef } from 'react'
import ProfileImage from '../../img/profileImg.jpg';
import './PostShare.css';
import { UilScenery, UilPlayCircle, UilSchedule, UilLocationPoint, UilTimes } from '@iconscout/react-unicons';

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    }

    return (
        <div className='PostShare'>
            <img src={ProfileImage} alt='' />
            <div>
                <input type='text' placeholder="What's happening" />
                <div className='PostOptions'>
                    <div className='Option'
                        style={{ color: "var(--photo" }}
                        onClick={() => { imageRef.current.click() }}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className='Option'
                        style={{ color: "var(--video" }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className='Option'
                        style={{ color: "var(--location" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className='Option'
                        style={{ color: "var(--shedule" }}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className='button ps-button'>
                        Share
                    </button>
                    <div style={{ display: "none" }} >
                        <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && 
                    <div className='PreviewImage'>
                        <UilTimes onClick={() =>setImage(null)}/>
                        <img src={image.image} alt='' />
                    </div>
                }
            </div>
        </div>
    )
}

export default PostShare
