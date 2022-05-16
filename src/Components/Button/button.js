import React from "react";

const Button=({type,label})=>{
    return(
        <div>
            <button className={type}>{label}</button>
        </div>
    );
};

export default Button;