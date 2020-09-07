import React,{useState} from 'react'
import {Quizprops} from '../Types/Quiztypes'
import {Result} from './Result'
import '../Quiztemp.css';
export const Quiztemp:React.FC<Quizprops> = ({Quiz,amount,difficulty}) => {
    let [NextQuestion, setNextQuestion] = useState(0);
     let[CollectSelectedOpt,SetCollectSelectedOpt]:any=useState([]);
    let [totalMarks,setTotalMarks]=useState(0);
    let [result,setresult]=useState(false);
    let [selectOpt,SetselectOpt]=useState("");
    let option=Quiz[NextQuestion].option;
   let answear=Quiz[NextQuestion].answear;
    let category=Quiz[0].category;
    console.log(option,"Optionss")
     function Next(e:any){
                e.preventDefault();
         if(selectOpt===answear){
            setTotalMarks(++totalMarks)
            console.log("Total Marks",totalMarks)
        }
        SetCollectSelectedOpt([...CollectSelectedOpt, `${selectOpt}`]);
        if(NextQuestion+1===Number(amount)){
            return  setresult(true);
        }
             setNextQuestion(++NextQuestion);
    
      
    }
    console.log(CollectSelectedOpt,"CollectSelectedOption");
   
    function getselectvalue(e:any){
        SetselectOpt(e.target.value);
      
}
   
    if(result){
    return(<Result totalMarks={totalMarks} amount={amount} category={category} 
        Quiz={Quiz}
        colltedOPtion={CollectSelectedOpt}
        difficulty={difficulty}/>)
        
    }
    return (
        <div>
           
            
            <form onSubmit={Next} className="form">
                <h1 className="questionText">{Quiz[NextQuestion].question}</h1>
                <div className="amountDifficulty">
                  <p><strong>Category:</strong><span className="category">{category}</span></p>
                  <p>{NextQuestion+1}/{amount}</p>
                </div>
               <p><strong>Difficulty:</strong><span className="category">{difficulty}</span></p>
           {
               option.map((obj,key)=>{
                  return(
                <div key={key}>
                  <label className="radioContainer">
                      <input type="radio" name="opt"
                      onChange={getselectvalue}
                      value={obj}
                      required
                      checked={selectOpt===obj}
                     />
                          {obj}
                      
                   </label>
                   <hr className="line"/>
                 </div>
                  )
               })
           }
           <input type="submit" value="Next"/>
           </form>
           {/* <input type="button" value="Next" onClick={addEntryClick}/> */}
        </div>
    )
}
