import menuOptions from "../data/menuOptions";
import CustomLink from '../shared/CustomLink';

function DifficultyMenu(props) {
    function getButtonPath(item) {
        switch (item.title) {
            case 'START':
                return '/difficulty'

            case 'SCORES':
                return '/highscores'

            case 'RESET':
                return '/resetscores'

            default:
                return '/'
        }
    }

    return (
        <section style={{backgroundColor: 'lightBlue', color: 'rgba(0, 0, 0, 1)', padding: 20}}>
        <h3>
            Choose your difficulty
        </h3>

        <ul style={listButtonStyles}>
            {menuOptions[1].map((item) => (
                <CustomLink path={getButtonPath(item)} key={item.id} button={true}>
                    {item.title}
                </CustomLink>
            ))}
        </ul>
        </section>
    )
}

const listButtonStyles = {
    listStyle: 'none', 
    display: 'flex', 
    justifyContent:'center', 
    flexDirection:'row', 
    alignItems: 'center', 
    padding: 0,
};

export default DifficultyMenu