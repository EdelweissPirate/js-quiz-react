import { useState } from "react"

function Question({ questionList }) {
    const [questionNum, setQuestionNum] = useState(0)
    // const [currentQuestion, setCurrentQuestion] = useState(questionList[questionNum])

    return (
        <div>
            <h3>
                Question
            </h3>
            <div style={questionStyles}>
            <h5>Q 1 test</h5>
                {/* <h5>{currentQuestion.id}. {currentQuestion.q}</h5> */}
            </div>
            {/* <Answers questionNum={getNextQuestion}/> */}
        </div>
    )
}

const questionStyles = {
    backgroundColor: 'darkBlue',
    color: '#ffffff',
    border: 'none',
    borderRadius: '.5rem',  
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '1rem 2rem',
    margin: '1.5rem',

}

export default Question
