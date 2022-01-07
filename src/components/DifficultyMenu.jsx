import menuOptions from "../data/menuOptions";
import CustomLink from '../shared/CustomLink';

function DifficultyMenu({ gameDifficulty, test }) {
    return (
        <div>
            <h3>
                Choose your difficulty
            </h3>

            <ul style={listButtonStyles}>
                {menuOptions[1].map((item) => (
                    <CustomLink path='/mode' key={item.id} button={true} clickHandle={() => {gameDifficulty(item.title.toLowerCase())}}>
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

export default DifficultyMenu