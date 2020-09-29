import React from "react";
import { connect } from 'react-redux';
import { Modal, Spinner } from "react-bootstrap";

function LoadingModal(props) {
    console.log("inside loading modal")
    return (
        <Modal
            size="sm"
            show={props.loadingModal}
            centered
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Body className="justify-content-center m-2 row">
                <Spinner animation="border" role="status"  variant="success" />
                <span className="ml-2 mt-1"> {props.label}</span>
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        loadingModal: state.shared.isLoading
    }
}

export default connect(mapStateToProps)(LoadingModal);