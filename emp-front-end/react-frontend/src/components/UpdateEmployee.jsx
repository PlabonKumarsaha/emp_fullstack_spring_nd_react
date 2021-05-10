import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService'

class UpdateEmployee extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
        }
        // handler methods must be bined in the constructor
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);

    }

    changeFirstNameHandler =(event) =>{
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler =(event) =>{
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler =(event) =>{
        this.setState({emailId: event.target.value})
    }
  
    updateEmployee = (e) => {
        e.preventDefault();
        let employee ={
           
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email_ID : this.state.emailId
        };
     
        console.log('emp =>'+ JSON.stringify(employee));
        
    }

    componentDidMount(){
        EmployeeService.getEmpByID(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId : employee.email_ID
            });
        });
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">

                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employees </h3>
                        <div className="card-body">
                        <form>
                            <div className = "form-group">
                                <label> First Name: </label>
                                <input placeholder="First Name" name="firstName" className="form-control" 
                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>

                            <div className = "form-group">
                                <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control" 
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>

                            <div className = "form-group">
                                <label> Email Id: </label>
                                <input placeholder="Email Address" name="emailId" className="form-control" 
                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                            </div>

                            <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                           
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default UpdateEmployee