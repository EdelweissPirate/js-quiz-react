import { Route, Routes } from 'react-router-dom'
import MainMenu from "../pages/MainMenu"
import DifficultyMenu from "../pages/DifficultyMenu"
import ModeMenu from "../pages/ModeMenu"
import Page404 from "../pages/Page404";

function Main(){
    return(
        <Routes>
            <Route exact path='/' element={<MainMenu />} />
            {/* <Route exact path='/highscores' element={<HighScores />} /> */}
            {/* <Route exact path='/reset' element={<ResetScores />} /> */}

            <Route path='/difficulty' element={<DifficultyMenu />}/>
            <Route path='/mode' element={<ModeMenu />}/>

            <Route path='*' element={<Page404 />}/>
        </Routes>
    )
}

export default Main
