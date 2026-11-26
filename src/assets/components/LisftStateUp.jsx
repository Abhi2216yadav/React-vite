import { useState } from "react";
import "./components/EV.css";

export const LiftState = () => {
    return (
        <>
        <InputComponent />
        <DisplayComponent />
        </>
    );
};

const InputComponent = () => {

    const [inputValue, setInputValue] = useState("");
    return (
        <>
        <input>
            type = "text"
            placeholder = "Enter your name"
            value = {inputValue}
        </input>
        </>
    );
};

const DisplayComponent = () {
    return (
        <>
            <p>The current input value is : </p>;
        </>
    );
};