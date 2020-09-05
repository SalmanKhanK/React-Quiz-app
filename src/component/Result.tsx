import React from 'react'
import {Marks} from '../Types/Quiztypes'
export const Result:React.FC<Marks> = ({totalMarks,amount,difficulty,category}) => {
    return (
        <div>
            <p>Difficulty:{difficulty}</p>
            <p>Category:{category}</p>
            <h1>Total Marks:{totalMarks}out of {amount}</h1>
        </div>
    )
}
