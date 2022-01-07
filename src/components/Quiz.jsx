import { useEffect, useState } from "react"
import Question from "./Question";

function Quiz({ gameMode, gameDifficulty }) {
    const [counter, setCounter] = useState(3)
    const [numAlpha, setNumAlpha] = useState(1)

    const [showQuestion, setshowQuestion] = useState(false)

    useEffect(() => {
        setTimeout(function() {
            let newAlpha = numAlpha - 0.1;

            if(newAlpha > 0){
                setNumAlpha(newAlpha)
            } else {
                if(!showQuestion){
                    let newCounter = counter - 1;

                    setNumAlpha(1);

                    isNaN(newCounter) ? startQuiz() : 
                    newCounter !== 0 ? setCounter(newCounter) : setCounter('GO!')
                }
            };

        }, 40);

        return () => {

        }
    }, [numAlpha, counter, showQuestion])

    // constructQuestionList(gameDifficulty, gameMode)

    const startQuiz = () => {
        console.log('begin')
        setshowQuestion(true)
    }

    return (
        <div className="container">
            {!showQuestion && <h1 style={{fontSize:"40vh", padding:'0', margin: 0, marginTop: -50, color:`rgba(0, 0, 0, ${numAlpha})`}}>
                {counter}
            </h1>}

            {showQuestion && <Question />}
        </div>
    )
}

export default Quiz
