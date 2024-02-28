import React from "react";
import ReactDOM from "react-dom/client";

const Component1 = () => (
    <h1 className = "head">This is Component-1 </h1>
) 

const Component2 = () => (
    <div className = "container">
        <Component1></Component1>
        <Component1/>
        {Component1()}
        <h1>Inside a React Component-2</h1>
    </div>
    
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component2/>);

