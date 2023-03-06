import React, { useState, useRef } from 'react'
import ProfileImage from '../../img/profileImg.jpg';
import './PostShare.css';
import { UilScenery, UilPlayCircle, UilSchedule, UilLocationPoint, UilTimes } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/UploadAction';

const PostShare = () => {
    const loading = useSelector((state) => state.postReducer.uploading)
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const desc = useRef();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.authReducer.authData);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    }

    const reset = () => {
        setImage(null);
        desc: desc.current.value = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if(image) {
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName);
            data.append("file", image);
            newPost.image = fileName;
            console.log(newPost);
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(uploadPost(newPost));
        reset();
    }

    return (
        <div className='PostShare'>
            <img src={ProfileImage} alt='' />
            <div>
                <input ref={desc} required type='text' placeholder="What's happening" />
                <div className='PostOptions'>
                    <div className='Option'
                        style={{ color: "var(--photo" }}
                        onClick={() => imageRef.current.click() }>
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
                    <button className='button ps-button' 
                    onClick={handleSubmit}
                    disabled={loading}
                    >
                        {loading ? "Uploading...": "Share" }
                    </button>
                    <div style={{ display: "none" }} >
                        <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && 
                    <div className='PreviewImage'>
                        <UilTimes onClick={() =>setImage(null)}/>
                        <img src={URL.createObjectURL(image)} alt='' />
                    </div>
                }
            </div>
        </div>
    )
}

export default PostShare
