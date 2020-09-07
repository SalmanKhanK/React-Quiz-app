import React from 'react'
import {Marks} from '../Types/Quiztypes'
import '../App.css'
import  {Card,CardContent,Typography} from '@material-ui/core';
export const Result:React.FC<Marks> = ({totalMarks,difficulty,category,colltedOPtion,Quiz}) => {
    return (
        <div>
            <h1 className="score">Score:{totalMarks}</h1>
           
            <p ><span className="value">Difficulty:</span>{difficulty}</p>
            <p><span className="value">Category:</span>{category}</p>
     
       
   {
     colltedOPtion.map((SelectedOption,key)=>{
       var checkmark;
       var wrong;
      if(SelectedOption===Quiz[key].answear){
         checkmark="Checkmark";
         wrong="False";
      } 
      if(SelectedOption!==Quiz[key].answear){
        checkmark="CheckWrong";
        wrong="wrong";
     } 
       return(
        <Card className="Card">
           <CardContent>
           <Typography key={key} color="textSecondary" gutterBottom>
              <h1>{Quiz[key].question}<span className={`${wrong}`}>X</span><span className={`${checkmark}`}>✔</span></h1>
              <p>Your Ans:{SelectedOption}</p>
              <p>Correct Ans:{Quiz[key].answear}</p> 
              </Typography>
           </CardContent>
         </Card>
       )
     })
   }
   

 
        </div>
    )
}
