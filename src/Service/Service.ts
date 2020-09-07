import {QuizDetailed,getQuestion} from '../Types/Quiztypes'
const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)
export const getQuestiondetailed=async(amount:number,category:number,difficulty:string):Promise<getQuestion[]>=>{
    const fetchQuiz=await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`)
    const {results}=await fetchQuiz.json()
   let prom=new Promise(function(resolve, reject) {
        setTimeout(()=>{
            if(results.length){
                resolve("Resolved")
            }
            else{
                reject("Rejected")
            }
           
        },1000)
    });
    prom.then(()=>{console.log("Reso")})
    .catch((err)=>{console.log("Error",err)});
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

