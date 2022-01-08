import questions from "./data/questions"

export function constructQuestionList(difficulty, mode){
    let questionCount
    let questionList = []

    if(mode !== 'survival'){
        questionCount = 5
    } else {
        questionCount = 100
    }

    for(let i = 1; i <= questionCount; i++){
        let randQuestion = randomFromArray(questions[difficulty])

        let newQuestion = {
            id: i,
            q: randQuestion.q,
            answers: {
                A: randQuestion.answers.A,
                B: randQuestion.answers.B,
                C: randQuestion.answers.C,
                D: randQuestion.answers.D
            },
            correctAnswer: randQuestion.correctAnswer,
        };

        questionList.push(newQuestion)
    }

    return questionList
}

export function randomFromArray(array){
    let randomNum = randomInteger(0, array.length - 1)
    return array[randomNum]
}

export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function clamp(n, min, max){
    return Math.max(Math.min(n, max), min)
}

export function cycleN(n, min, max){
    n++
    if(n > max) n = min

    return n
}