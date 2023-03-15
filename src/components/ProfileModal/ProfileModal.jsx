import { Modal } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUser } from '../../actions/UserAction';
import {uploadImage} from '../../actions/UploadAction';

function ProfileModal({ modalOpened, setModalOpened, data }) {
    const { password, ...other } = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);

    const dispatch = useDispatch();
    const param = useParams();
    const { user } = useSelector((state) => state.authReducer.authData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            event.target.name === "profilePicture"
                ? setProfileImage(img)
                : setCoverImage(img);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = formData;
        console.log(formData)
        if (profileImage) {
            const data = new FormData();
            const fileName = Date.now() + profileImage.name;
            data.append('name', fileName);
            data.append('file', profileImage);
            userData.profilePicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log(error);
            }
        }
        if (coverImage) {
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append('name', fileName);
            data.append('file', coverImage);
            userData.coverPicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(updateUser(param.id, userData));
        setModalOpened(false);
    }


    return (
        <>
            <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="" size='55%'>
                <form className='InfoForm'>
                    <h3>Your info</h3>
                    <div>
                        <input className='InfoInput' name='firstName' type='text' placeholder='First Name' onChange={handleChange} value={formData.firstName} />
                        <input className='InfoInput' name='lastName' type='text' placeholder='Last Name' onChange={handleChange} value={formData.lastName} />
                    </div>
                    <div>
                        <input className='InfoInput' name='worksAt' type='text' placeholder='Works at' onChange={handleChange} value={formData.worksAt} />
                    </div>
                    <div>
                        <input className='InfoInput' name='livesIn' type='text' placeholder='Lives in' onChange={handleChange} value={formData.livesIn} />
                        <input className='InfoInput' name='country' type='text' placeholder='Country' onChange={handleChange} value={formData.country} />
                    </div>
                    <div>
                        <input className='InfoInput' name='relationship' type='text' placeholder='Relationship status' onChange={handleChange} value={formData.relationship} />
                    </div>
                    <div>
                        Profile Image
                        <input type='file' name='profilePicture' onChange={onImageChange} />
                        Cover Image
                        <input type='file' name='coverPicture' onChange={onImageChange} />
                    </div>
                    <button className='button InfoButton' onClick={handleSubmit}>Update</button>
                </form>
            </Modal>
        </>
    );
}

export default ProfileModal;