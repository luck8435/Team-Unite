import { Modal } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function ShareModal({ modalOpened, setModalOpened }) {

    return (
        <>
            <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="" size='55%'>
                <PostShare />
            </Modal>
        </>
    );
}

export default ShareModal;