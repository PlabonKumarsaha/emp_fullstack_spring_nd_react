import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            // reriving id from the URL
            // clicking view button naviates to view-emp url with an id.. This is taken by the propos.params
            id: this.props.match.params.id,
            employee: {}
        }
    }
    componentDidMount(){
        EmployeeService.getEmpByID(this.state.id).then(res => {
            this.setState({employee : res.data})
        });
    }

    render() {
        return (
            <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Employee Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Employee First Name: </label>
                        <div> { this.state.employee.firstName }</div>
                    </div>
                    <div className = "row">
                        <label> Employee Last Name: </label>
                        <div> { this.state.employee.lastName }</div>
                    </div>
                    <div className = "row">
                        <label> Employee Email ID: </label>
                        <div> { this.state.employee.email_ID }</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ViewEmployeeComponent