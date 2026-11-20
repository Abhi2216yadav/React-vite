import { useState } from "react";


export const State = () => {

    const [count, setCount] = useState(0);
    console.log("Parent Component rendered");
    const handleButtonClick = () => {
        setCount(() => count + 1);
    };

    return (
        <>
            <section className="main-div">
                <h1>{count}</h1>
                <button onClick={handleButtonClick}>Increment</button>

            </section>
            <ChildComponent count = {count}/>
        </>
    );
};

function ChildComponent({count}){
    console.log("Child component rendered");
    return (
        <div className="main-div">
            <h2 className="text">Child Component- {count}</h2>
        </div>
    );
}