import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/employees";

class EmployeeService{

    getEmployees(){

        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

//export object of a class
export default new EmployeeService();