import { Suspense } from "react";
import { fetchEmployee } from "service/employeeService";

const resource = fetchEmployee();

const EmployeeLists = () => {
  const employees = resource.employee.read();
  return (
    <ul>
      {employees.map((data) => (
        <li key={data.id}>
          {data.first_name} {data.last_name}
        </li>
      ))}
    </ul>
  );
};

const Employee = () => (
  <Suspense fallback={<h1>Loading Employee...</h1>}>
    <EmployeeLists />
  </Suspense>
);

export default Employee;
