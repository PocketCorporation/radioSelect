import React from 'react';
import { createContext, useContext } from 'react' 

const RadioContext = createContext()

const Radio = ({children, ...props}) => {
    const {value, onChange} = useContext(RadioContext)

    return (
        <label className={`px-6 py-4 shadow rounded-lg cursor-pointer transition-all ${value===props.value?'bg-gradient-to-b from-violet-200 to-violet-400 text-violet-800 shadow-violet-500':'bg-white hover:shadow-md shadow-gray-300 scale-105'}`}>
            <input type="radio" className='hidden' checked={value===props.value} onChange={onChange} {...props} />
            {children}
        </label>
    );
}

export default Radio;

export function RadioGroup({value, onChange, children}) {
    return (
        <RadioContext.Provider value={{value,onChange}}>
            {children}
        </RadioContext.Provider>
    )
}