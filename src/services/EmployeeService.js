import axios from "axios";

const EMPLOYEE_API_BASE_URL = "/api/v1/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
}

// eslint-disable-next-line
export default new EmployeeService();
