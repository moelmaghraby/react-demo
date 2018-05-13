import React from 'react';

const  EmployeeDetails = (props) => props.employee ?(
    <div>
        <h1>{props.employee.name}</h1>
        <h1>{props.employee.age}</h1>
        <h1>{props.employee.title}</h1>
        <p>{props.employee.bio}</p>
    </div>
) : null

export default EmployeeDetails