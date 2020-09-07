import React, { useState,  useEffect } from 'react'
import '../App.css'
import {getQuestiondetailed} from '../Service/Service'
import {getQuestion} from '../Types/Quiztypes'
import {Quiztemp} from './Quiztemp'
export const FormCard = () => {
       let[Nextpage,setNextpage]= useState(false);
  let [questionAmount, SetquestionAmount] = useState(0);
  let[Quiz,setQuiz]=useState<getQuestion[]>([]);
  let [questionCategory, SetquestionCategory] = useState(-1);
  let [questionDifficulty, SetquestionDifficulty] = useState("none");
  console.log(questionAmount)
  async function handleSubmit(event: any) {

    event.preventDefault();
    console.log(questionAmount)
    console.log(questionCategory)
    console.log(questionDifficulty)
    const  fetchAPiData= await getQuestiondetailed(questionAmount,questionCategory,questionDifficulty)
    
    console.log(fetchAPiData);
    setQuiz(fetchAPiData);
    setNextpage(true);     
  }

 
  if(Nextpage){
    return(
      <Quiztemp Quiz={Quiz} amount={questionAmount} category={questionCategory} difficulty={questionDifficulty} />
    )
  }
  return (
    <div className="FormBox">
      <h1 className="quizapp">QUIZ APP</h1>
      <form onSubmit={handleSubmit} >
        <input type="number" placeholder="Enter Question Amount" className="Qamount"
          required
          onChange={(ev: any) => { SetquestionAmount(ev.target.value) }}
        />
        <select  onChange={(event:any)=>{SetquestionCategory(event.target.value)}} className="select-css"
        required>
          <option value="">Select Category</option>
          <option value={9}>General Knowledge</option>
          <option value={18}>Computer Science</option>
          <option value={17}>Science & Nature</option>
          <option value={24}>Plitics</option>
          <option value={15}>Entertainment:vediogames</option>
          <option value={21}>Sports</option>
          <option value={25}>Art</option>
          <option value={32}>Cartoon & Animation</option>
          <option value={26}>Celebrities</option>
          <option value={12}>Music</option>
          <option value={23}>History</option>
        </select>
        <select  onChange={(event:any)=>{SetquestionDifficulty(event.target.value)}}
          className="select-css"
          required >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      
        <input type="submit" value="Generate Quiz" className="StartQuizButton"/>
      </form>
    </div>
  )
}
