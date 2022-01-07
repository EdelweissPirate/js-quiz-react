import menuOptions from "../data/menuOptions";
import CustomLink from '../shared/CustomLink';


function MainMenu(props) {
    // TODO - essentially recreated react-router component 
    // branched off for revision
    // passing desired variable via props and state instead 

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
    };

    return (
        <div>
        <h3>
            Test your {props.codeLang} knowledge
        </h3>

        <ul style={listButtonStyles}>
            {menuOptions[0].map((item) => (
                <CustomLink path={getButtonPath(item)} key={item.id} button={true}>
                    {item.title}
                </CustomLink>
            ))}
        </ul>
        </div>
    )
}

const listButtonStyles = {
    listStyle: 'none', 
    display: 'flex', 
    justifyContent:'center', 
    flexDirection:'column', 
    alignItems: 'center', 
    padding: 0,
};

export default MainMenu
