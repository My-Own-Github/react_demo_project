import React from 'react'
import './avtarCard.css'
import 'tachyons';
import EmployeCard from './employeCard';
import { connect } from 'react-redux';
import { store } from './store';
import Actions from '../app/duck/action'
import operation from '../app/duck/operation';
import { Spinner } from "react-bootstrap";

class EmployesListPage extends React.PureComponent {
    constructor(props) {
        super(props);

    }
    componentDidMount = async () => {
        store.dispatch(Actions.isLogingModal(true))
        await operation.getEmployesList();
    }

    getEmployesLists = () => {
        let employesCard = this.props.employesList?.map((emp, i) => {
            return <EmployeCard key={i} employeData={emp} />
        })
        return employesCard;
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.props.employesList?.length > 0 ?
                        <div className='mainpage'>
                            <h1>List of Employees</h1>
                            <this.getEmployesLists />
                        </div>
                        :
                        <div className="justify-content-center m-5">
                             <Spinner animation="border" role="status"  variant="success" />
                            <h4>Loading Data...</h4>
                        </div>
                    }
                </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employesList: state.shared.employesList,
        isLoading: state.shared.isLoading
    }
}
export default connect(mapStateToProps, null)(EmployesListPage);