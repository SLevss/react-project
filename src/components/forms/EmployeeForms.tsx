import React, { useState } from "react";
import { FormControl,TextField, InputLabel, Select, Box } from "@mui/material";
import employeeConfig from '../../config/employee-config.json';
import { Employee } from "../../model/Employee";

type Props = {
    submitFn:(empl: Employee) => boolean,
    employeeUpdate?: Employee
}
const initialEmployee: Employee ={id: 0, birthDate: '', name:'',
department:'', salary:0};
export const EmployeeForm: React.FC<Props> = ({submitFn, employeeUpdate}) => {

    const [employee, setEmployee] =
    useState<Employee>(employeeUpdate ? employeeUpdate: initialEmployee);
    function handlerName (event: any ) {
        const name = event.target.value;
        const emplCopy = {...employee};
        emplCopy.name = name;
        setEmployee(emplCopy);
    }
    function handlerBirthdate (event: any ) {
        const birthDate = event.target.value;
        const emplCopy = {...employee};
        emplCopy.birthDate = birthDate;
        setEmployee(emplCopy);
    }
    function handlerSalary (event: any ) {
        const salary = event.target.value;
        const emplCopy = {...employee};
        emplCopy.salary = salary;
        setEmployee(emplCopy);
    }
    function handlerDepartment (event: any ) {
        const department = event.target.value;
        const emplCopy = {...employee};
        emplCopy.department = department;
        setEmployee(emplCopy);
    }
    function onSubmitFn(event: any) {
        event.preventDefault();
        submitFn(employee);
        document.querySelector('form')!.reset();
    }
    function onResetFn(event: any) {
        setEmployee(employeeUpdate ? employeeUpdate: initialEmployee);
    }
}