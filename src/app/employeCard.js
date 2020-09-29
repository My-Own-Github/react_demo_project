import React from 'react'
import { Modal } from "react-bootstrap";

class EmployeCard extends React.PureComponent {
    constructor(props) {
        super(props)
        this.emp = props.employeData;
        this.state = {
            showModal: false
        }
    }


    showEmployeDetail = () => {
        this.setState({ showModal: true })
    }
    handleClose = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.showModal &&
                    <Modal show={this.state.showModal} onHide={this.handleClose}  size="sm">
                        <Modal.Header closeButton className="pb-0">
                            <Modal.Title className="text-center"><h4>Employee Detail</h4></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="card">
                                <div className="card-body">
                                    <p className="text-muted text-left mb-0">First Name &nbsp;:&nbsp;
                                        <span className="text-font-weight-bold">
                                            &nbsp;{this.emp.first_name}
                                        </span>
                                    </p>
                                    <span className="text-muted text-left">Last Name &nbsp;: &nbsp;
                                        {this.emp.last_name}
                                    </span>
                                    <p className="text-muted text-left mb-0">Email  &nbsp;:&nbsp;  <span className="text-success">&nbsp;{this.emp.email}</span></p>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                }
                <div className='avtarStyle ma4 bg-light-yellow dib pa grow tc hand-cursor' onClick={() => this.showEmployeDetail()}>
                    <img src={this.emp.avatar} alt='Avtar' />
                    <h1> {this.emp.first_name}</h1>
                    <p>{this.emp.last_name}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default EmployeCard;