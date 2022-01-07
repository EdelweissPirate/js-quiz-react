import menuOptions from "../data/menuOptions";
import CustomLink from '../shared/CustomLink';


function ModeMenu({ gameMode }) {
    return (
        <div>
        <h3>
            Choose your mode
        </h3>

        <ul style={listButtonStyles}>
            {menuOptions[2].map((item) => (
                <CustomLink path='/quiz' key={item.id} button={true} clickHandle={() => {gameMode(item.title.toLowerCase())}}>
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

export default ModeMenu