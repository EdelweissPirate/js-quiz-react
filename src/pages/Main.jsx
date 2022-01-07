import { Route, Routes } from "react-router-dom"
import MainMenu from "../components/MainMenu"
import DifficultyMenu from "../components/DifficultyMenu"
import ModeMenu from "../components/ModeMenu"
import Question from "../components/Question";
import Page404 from "./Page404";
import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";

function Main(){
    const [difficulty, setDifficulty] = useState(null)
    const [mode, setMode] = useState(null)

    return(
        <section className="container">
            <Routes>
                <Route exact path="/" element={<MainMenu />} />
                {/* <Route exact path="/highscores" element={<HighScores />} /> */}
                {/* <Route exact path="/reset" element={<ResetScores />} /> */}

                <Route path="/difficulty" element={<DifficultyMenu gameDifficulty={setDifficulty} test={difficulty}/>}/>
                <Route path="/mode" element={<ModeMenu gameMode={setMode} />}/>
                <Route path="/quiz" element={<Quiz gameDifficulty={difficulty} gameMode={mode}/>}/>
                {/* <Route path="/question" element={<Question />}/> */}
                {/* <Route path="/endgame" element={<EndGame />}/> */}

                <Route path="*" element={<Page404 />}/>
            </Routes>
        </section>
    )
}

export default Main
