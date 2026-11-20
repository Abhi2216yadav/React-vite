import { useState } from "react";

// const users = [ // no need we can use useState
//     { name : "Abhay", age: 21},
//     { name : "Bob", age: 26},
//     { name : "Charlie", age: 18},
//     { name : "Angles", age: 34},
// ];

export const DericedState = () => {

    const [users] = useState([
        { name : "Abhay", age: 21},
        { name : "Bob", age: 26},
        { name : "Charlie", age: 18},
        { name : "Angles", age: 34},
        { name : "Alia", age: 22},
        { name : "Alex", age: 17},
    ])

    console.log(users);
    const userCount = users.length;

    const averageAge = users.reduce((accum, curElem) => accum + curElem.age, 0)/ userCount;
    return (
        <div className="main-div">
            <h1>User List</h1>
            <ul>
                {users.map((curElem, index) => {
                    return (
                        <li key={index}>
                            {curElem.name} - {curElem.age} year old
                        </li>
                    );
                })}
            </ul>
            <p>Total Users: {userCount}</p>
            <p>Average Age:{averageAge} </p>
        </div>
    );
};