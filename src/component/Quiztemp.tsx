import React,{useState} from 'react'
import {Quizprops} from '../Types/Quiztypes'
import {Result} from './Result'
export const Quiztemp:React.FC<Quizprops> = ({Quiz,amount,difficulty}) => {
    let [NextQuestion, setNextQuestion] = useState(0);
    let [totalMarks,setTotalMarks]=useState(0);
    let [result,setresult]=useState(false);
    let [selectOpt,SetselectOpt]=useState();
    let option=Quiz[NextQuestion].option;
   let answear=Quiz[NextQuestion].answear;
    let category=Quiz[0].category;
    console.log(option,"Optionss")
    function Next(Event:any){
        
        Event.preventDefault();
        if(NextQuestion+1===Number(amount)){
            return  setresult(true);
        }
             setNextQuestion(++NextQuestion);
       if(selectOpt===answear){
           setTotalMarks(++totalMarks)
           console.log("Total Marks",totalMarks)
       }
    }
   
    if(result){
    return(<Result totalMarks={totalMarks} amount={amount} category={category}  difficulty={difficulty}/>)
        
    }
    return (
        <div>
            <p>{NextQuestion+1}/{amount}</p>
            <p>Difficulty:{difficulty}</p>
            <p>Category:{category}</p>
            <form onSubmit={Next}>
            <h1>{Quiz[NextQuestion].question}</h1>
           {
               option.map((obj,key)=>{
                  return(
                <div key={key}>
                  <label>
                      <input type="radio" value={obj} 
                      onChange={(ev:any)=>{SetselectOpt(ev.target.value)}} checked={selectOpt==obj}
                      required/>
                          {obj}
                   </label>
                 </div>
                  )
               })
           }
           <input type="submit" value="Next"/>
           </form>
        </div>
    )
}
