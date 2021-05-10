import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            employees : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        
    }

    addEmployee(){
        this.props.history.push('/add-employee')
    }

   
    editEmployee(id){
         //pass id to the path
        // when a user calls the update button , the user is navigated to the particular id
        this.props.history.push(`/update-employee/${id}`)
        }

    deleteEmployee(id){

    }

    componentDidMount(){
        // called immidietly after a component is mounted.So http calls or api calls should be done here
       
        EmployeeService.getEmployees().then( res => {

            this.setState({employees : res.data});
        });
        
    }

    render() {

        return (
            <div>

            <h2 className = "text-center">Employees List</h2>
            <div className = "row">
            <button onClick={ () => this.addEmployee()} className="btn btn-Primary">ADD emp </button>

            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th> Employee First Name</th>
                        <th> Employee Last Name</th>
                        <th> Employee Email Id</th>
                        <th> Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.employees.map(
                            emp =>
                            <tr key = {emp.id}>

                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email_ID}</td>
                                <td>
                                <button onClick={ () => this.editEmployee(emp.id)} className="btn btn-info">Update </button>
                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(emp.id)} className="btn btn-danger">Delete </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
            </div>

            </div>
        )
    }
}

export default ListEmployeeComponent