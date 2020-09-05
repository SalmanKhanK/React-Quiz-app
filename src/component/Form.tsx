import React, { useState,  useEffect } from 'react'
import '../App.css'
import {getQuestiondetailed} from '../Service/Service'
import {getQuestion} from '../Types/Quiztypes'
import {Quiztemp} from './Quiztemp'
export const FormCard = () => {
       let[Nextpage,setNextpage]= useState(false);
  let [questionAmount, SetquestionAmount] = useState(10);
  let[Quiz,setQuiz]=useState<getQuestion[]>([]);
  let [questionCategory, SetquestionCategory] = useState(9);
  let [questionDifficulty, SetquestionDifficulty] = useState("easy");

  console.log(questionAmount)
  async function handleSubmit(event: any) {
   
    event.preventDefault();
   
    console.log(questionAmount)
    console.log(questionCategory)
    console.log(questionDifficulty)
    const  fetchAPiData= await getQuestiondetailed(questionAmount,questionCategory,questionDifficulty);
    if(fetchAPiData==null){
      console.log("Not found")
    }
  
    console.log(fetchAPiData);

    setQuiz(fetchAPiData);
    setNextpage(true);
 
     
        
  }
  if(Nextpage){
    return(
      <Quiztemp Quiz={Quiz} amount={questionAmount} category={questionCategory} difficulty={questionDifficulty} />
    )
  }

  console.log(Quiz,"Quizzzzzzzzz")




 
  return (
    <div>
     {/* <h1>{Quiz[0].question}</h1> */}
         <h1>{questionDifficulty}</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter Amount" className="Qamount"
          value={questionAmount}
          onChange={(ev: any) => { SetquestionAmount(ev.target.value) }}
        />
        <select  onChange={(event:any)=>{SetquestionCategory(event.target.value)}}>
          <option value="">Select Category</option>
          <option value={9}>General Knowledge</option>
          <option value={18}>Computer Science</option>
          <option value={17}>Science & Nature</option>
          <option value={24}>Plitics</option>
          <option value={15}>Entertainment:vediogames</option>
        </select>
        <select  onChange={(event:any)=>{SetquestionDifficulty(event.target.value)}}
         value={questionDifficulty}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      
        <input type="submit" value="Start Quiz" />
      </form>
    </div>
  )
}
