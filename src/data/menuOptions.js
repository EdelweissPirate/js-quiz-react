const mainMenuArray = [
    'start',
    'scores',
    'reset'
];

const difficultyMenuArray = [
    'easy',
    'normal',
    'hard'
];

const modeMenuArray = [
    'regular',
    'timed',
    'survival'
];

// const menuArray = [...mainMenuArray, ...difficultyMenuArray, ...modeMenuArray];

const mainMenuObjects = mainMenuArray.map((item, i) => ({ id: i, title: String(item).toUpperCase()}));
const difficultyMenuObjects = difficultyMenuArray.map((item, i) => ({ id: i, title: String(item).toUpperCase()}));
const modeMenuObjects = modeMenuArray.map((item, i) => ({ id: i, title: String(item).toUpperCase()}));

const menuOptions = [mainMenuObjects, difficultyMenuObjects, modeMenuObjects]

export default menuOptions