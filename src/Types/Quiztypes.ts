export type QuizDetailed={
    category:string,
    type:string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[]
}
export type getQuestion={
    question:string,
    answear:string,
    category:string,
    difficulty:string,
    option:string[]
}
export type Quizprops={
    Quiz:getQuestion[],
    amount:number,
    category:number,
    difficulty:string
}
export type Marks={
    totalMarks:number,
    amount:number,
    difficulty:string,
    category:string
}