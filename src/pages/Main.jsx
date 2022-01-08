import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Page404 from "./Page404";
import Quiz from "../components/Quiz";

function Main(){
    const [menuNum, setMenuNum] = useState(0)
    const [difficulty, setDifficulty] = useState(null)
    const [mode, setMode] = useState(null)
    
    useEffect(() => {
        console.log(difficulty)
    }, [difficulty])

    useEffect(() => {
        console.log(mode)
    }, [mode])

    return(
        <section className="container">
            <Routes>
                <Route exact path="/" element={<Menu menuNum={menuNum} setMenuNum={setMenuNum} />} />
                <Route exact path="/difficulty" element={<Menu menuNum={menuNum} setMenuNum={setMenuNum} setGameVar={setDifficulty} />} />
                <Route exact path="/mode" element={<Menu menuNum={menuNum} setMenuNum={setMenuNum} setGameVar={setMode} 
                />} />

                {/* <Route exact path="/highscores" element={<HighScores />} /> */}
                {/* <Route exact path="/reset" element={<ResetScores />} /> */}

                <Route path="/quiz" element={<Quiz gameDifficulty={difficulty} gameMode={mode}/>}/>
                {/* <Route path="/end" element={<EndGame />}/> */}

                <Route path="*" element={<Page404 />}/>
            </Routes>
        </section>
    )
}

export default Main
