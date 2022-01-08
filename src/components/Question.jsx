import { useEffect, useState } from "react"
import Button from '../shared/Button'

function Question({ thisQuestion, getNextQuestion }) {
    const [questionHeading, setQuestionHeading] = useState('Question')
    const [currentQuestion, setCurrentQuestion] = useState(thisQuestion)
    const [answers, setAnswers] = useState(currentQuestion.answers)
    const [currentAnswer, setCurrentAnswer] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(currentQuestion.correctAnswer)
    const [continueQuiz, setContinueQuiz] = useState(null)

    useEffect(() => {
        setCurrentQuestion(thisQuestion)
        setAnswers(thisQuestion.answers)
        setCorrectAnswer(thisQuestion.correctAnswer)
        
    }, [thisQuestion, currentQuestion, answers, correctAnswer])

    useEffect(() => {
        if(currentAnswer){
            console.log(currentAnswer, correctAnswer)
            let result = currentAnswer === correctAnswer ? true : false
            console.log(result)
            console.log(currentAnswer, correctAnswer)
            result ? setQuestionHeading('CORRECT!') : setQuestionHeading('Incorrect!')
            setContinueQuiz(true)
        }
    }, [currentAnswer, correctAnswer]) 

    return (
        <div>
            <h3>
                {questionHeading}
            </h3>
            <div style={questionStyles}>
                <h3 style={{textAlign:'left'}}>{thisQuestion.id}. {thisQuestion.q}</h3>
                <Button children='Next' clickHandle={() => (setCurrentAnswer('B'))}></Button>
                {!continueQuiz && 
                    <div>
                        {/* <Answer thisQuestion={answers.A} clickHandle={() => (checkAnswer)} />
                        <Answer thisQuestion={answers.B} clickHandle={() => (checkAnswer)} />
                        <Answer thisQuestion={answers.C} clickHandle={() => (checkAnswer)} />
                        <Answer thisQuestion={answers.D} clickHandle={() => (checkAnswer)} /> */}
                    </div>
                }
                {continueQuiz && 
                    <div>
                        <Button children='Next' clickHandle={setContinueQuiz(false)}></Button>
                    </div>
                }
            </div>
        </div>
    )
}

const questionStyles = {
    backgroundColor: 'darkBlue',
    color: '#ffffff',
    border: 'none',
    borderRadius: '.5rem', 
    padding: '3rem 6rem',
    margin: '1rem 3rem',

}

export default Question
