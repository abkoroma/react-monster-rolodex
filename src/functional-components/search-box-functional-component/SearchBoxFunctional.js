import React from "react";
import './search-box-functional.css'

export default function SearchBoxFunctional({ className, placeholder, onChangeHandler }) {

    return(
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );

}