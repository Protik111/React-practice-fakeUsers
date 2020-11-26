import React from 'react';
// import logo from './logo.svg';
import './App.css';
import data  from './Data/data.json';
import { useEffect, useState} from 'react';
import Person from './Components/Person/Person';
import Salary from './Components/Salary/Salary';

function App() {
  const [users, setUsers] = useState([]);
  const [salary, setSalary] = useState([]);

  useEffect( () => {
    setUsers(data);
  }, [])

  // useEffect( () => {
  //   setSalary(salary);
  // }, [])

   const handleSalary = (user) =>{
    const newSalary = [...salary , user];
    // console.log(user);
    setSalary(newSalary);
    // console.log(newSalary);
   }

  return (
    <div className="App">
      <Salary salary={salary}></Salary>
      <ul>
         {
            users.map(user => <Person handleSalary={handleSalary} User={user} key={user.id}></Person>)
         }
      </ul>

        
    
    </div>
  );
}

export default App;
