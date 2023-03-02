import { Modal } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {

    return (
        <>
            <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="" size='55%'>
                <form className='InfoForm'>
                    <h3>Your info</h3>
                    <div>
                        <input className='InfoInput' name='firstName' type='text' placeholder='First Name' />
                        <input className='InfoInput' name='lastName' type='text' placeholder='Last Name' />
                    </div>
                    <div>
                        <input className='InfoInput' name='worksAt' type='text' placeholder='Works at' />
                    </div>
                    <div>
                    <input className='InfoInput' name='livesIn' type='text' placeholder='Lives in' />
                        <input className='InfoInput' name='country' type='text' placeholder='Country' />
                    </div>
                    <div>
                    <input className='InfoInput' name='status' type='text' placeholder='Relationship status' />
                    </div>
                    <div>
                        Profile Image
                        <input type='file' name='profileImg' />
                        Cover Image
                        <input type='file' name='coverImg' />
                    </div>
                    <button className='button InfoButton'>Update</button>
                </form>
            </Modal>
        </>
    );
}

export default ProfileModal;