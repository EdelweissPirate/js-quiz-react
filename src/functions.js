import questions from "./data/questions";

export function constructQuestionList(difficulty, mode){
    let questionCount;
    let questionList = [];

    if(mode !== 'survival'){
        questionCount = 5;
    } else {
        questionCount = 100;
    };

    for(let i = 1; i <= questionCount; i++){
        let thisQuestion = randomFromArray(questions[difficulty]);
        thisQuestion.id = i;
        questionList.push(thisQuestion);
    };

    return questionList
};

export function randomFromArray(array){
    let randomNum = randomInteger(0, array.length - 1);
    return array[randomNum];
};

export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
};