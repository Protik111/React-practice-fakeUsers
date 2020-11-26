import React from 'react';
import './Salary.css';
// import { parse } from '@fortawesome/fontawesome-svg-core';

const Salary = (props) => {
    let salary = props.salary;
    console.log(salary);
    let totalSalary = 0;
    for (let i = 0; i < salary.length; i++) {
        let element = salary[i];
        const parsedSalary = parseInt(element);
        totalSalary = totalSalary + parsedSalary;     
    }
    // const totalSalary = salary.reduce((sum, element) => sum + element.salary, 0);
    return (
        <div className="personSalary">
            <h3>Salary of Users</h3>
            <hr/>
            <h4>Total Users : {salary.length} </h4>
            <h4>Total Salary : {totalSalary}</h4>
        </div>
    );
};

export default Salary;