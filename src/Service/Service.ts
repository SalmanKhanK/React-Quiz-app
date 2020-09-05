import {QuizDetailed,getQuestion} from '../Types/Quiztypes'
const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)
export const getQuestiondetailed=async(amount:number,category:number,difficulty:string):Promise<getQuestion[]>=>{
    const fetchQuiz=await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`)
    const {results}=await fetchQuiz.json()
 
    const Quiz:getQuestion[]=results.map((questionObj:QuizDetailed)=>{
        return{
            category:questionObj.category,
            difficulty:questionObj.difficulty,
           question:questionObj.question,
           answear:questionObj.correct_answer,
           option:shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return Quiz;

}

