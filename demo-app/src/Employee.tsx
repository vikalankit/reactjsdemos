import React from 'react';

function Employee(){
    const employess =[
        {
            empid:1,
            empname:'alok'
        },
        {
            empid:2,
            empname:'ravi'
        },
        {
            empid:3,
            empname:'prakash'
        },
        {
            empid:4,
            empname:'gagan'
        }
    ]
    const getEmployees = employess.map((emp) => {return <li key={emp.empid}>{emp.empid} {emp.empname}</li>});
    return(
        <div>
            <ul>{getEmployees}</ul>
        </div>
    )
}

export default Employee;