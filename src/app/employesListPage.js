import React from 'react'
import './avtarCard.css'
import 'tachyons';
import EmployeCard from './employeCard';
import { connect } from 'react-redux';
import Operation from '../app/duck/operation';
import { store } from './store';
import Actions from '../app/duck/action'
import operation from '../app/duck/operation';
import LoadingModal from '../app/loading-modal'

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
                    <LoadingModal label="Loading data..." />
                    {this.props.employesList?.length > 0 &&
                        <div className='mainpage'>
                            <h1>Welcome to ReactJs Life</h1>
                            <this.getEmployesLists />
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