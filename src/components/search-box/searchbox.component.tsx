import { ChangeEvent } from 'react';
import './search-box.css';

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}


function SearchBoxTS({className, placeholder, onChangeHandler}: SearchBoxProps) { 
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />  
}

export default SearchBoxTS;
