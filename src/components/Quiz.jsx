import { useEffect, useState } from "react"
import Question from "./Question";
import { constructQuestionList } from '../functions'

function Quiz({ gameMode, gameDifficulty }) {
    const [counter, setCounter] = useState(3)
    const [numAlpha, setNumAlpha] = useState(1)
    const [counting, setCounting] = useState(true)
    // const [startQuiz, setStartQuiz] = useState(false)

    const [showQuestion, setshowQuestion] = useState(false)
    const [questionNum, setQuestionNum] = useState(0)
    const [questionList, setQuestionList] = useState(null)

    useEffect(() => {
        setTimeout(function() {
            let newAlpha = numAlpha - 0.1;

            if(newAlpha > 0 && counter !== 'GO!'){
                setNumAlpha(newAlpha)
            } else {
                if(counting){
                    let newCounter = counter - 1;

                    setNumAlpha(1);

                    isNaN(newCounter) ? startQuiz() : 
                    newCounter !== 0 ? setCounter(newCounter) : setCounter('GO!')
                }
            };
        }, 80 - (5 * counter));

        return () => {
            
        }
    })


    const startQuiz = function() {
        console.log('begin')
        setCounting(false);
        setQuestionList(constructQuestionList(gameDifficulty, gameMode))
        setTimeout(function(){
            setshowQuestion(true)
        }, 1000)
    }

    return (
        <div className="container">
            {!showQuestion && <h1 style={{fontSize:"40vh", padding:'0', margin: 0, marginTop: -50, color:`rgba(0, 0, 0, ${numAlpha})`}}>
                {counter}
            </h1>}
            
            {showQuestion && <Question thisQuestion={questionList[questionNum]} getNextQuestion={setQuestionNum}/>}
        </div>
    )
}

Quiz.defaultProps = {
    gameMode: 'regular',
    gameDifficulty: 'easy'
}

export default Quiz
