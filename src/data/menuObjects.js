const menuObjects = [
    {
        id: 0,
        type: 'main',
        header: 'Test your JavaScript Knowledge',
        options: [
            'start',
            'scores',
            'reset'
        ],
        paths: [
            '/difficulty',
            '/highscores',
            '/scorereset'
        ],
    },
    {
        id: 1,
        type: 'difficulty',
        header: 'Choose your difficulty',
        options: [
            'easy',
            'normal',
            'hard'
        ],
        paths: [
            '/mode',
            '/mode',
            '/mode'
        ],
    },
    {
        id: 2,
        type: 'mode',
        header: 'Choose your mode',
        options: [
            'regular',
            'timed',
            'survival'
        ],
        paths: [
            '/quiz',
            '/quiz',
            '/quiz'
        ],
    },
];

export default menuObjects