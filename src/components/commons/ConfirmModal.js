import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ConfirmModal({ show, setShow, handleConfirm }) {

    const handleClose = () => setShow(false);

    const handle = () => {
        handleClose();
        if (handleConfirm) {
            handleConfirm();
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, Bạn đã chắc chưa?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
            </Button>
                    <Button variant="danger" onClick={handle}>
                        Xóa
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}