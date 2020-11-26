import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Person = (props) => {
    const {name, address, email, image, salary} = props.User;
    const handleSalary = props.handleSalary;
    return (
            <div className="personAllInfo">
                <div className="personImage">
                    <img src={image} alt=""/>
                </div>
                <div className="personInfo">
                    {/* <p>ID : {id}</p> */}
                    <h2>Name : {name}</h2>
                    <p>Salary : {salary}</p>
                    <p>Address : {address}</p>
                    <p>Email is : {email}</p>
                    <button className="btnAdd" onClick={() => handleSalary(props.User.salary)}><FontAwesomeIcon icon={faPlus} /> Click To Add</button>
                </div>
             
            </div>
    );
};

export default Person;