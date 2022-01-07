import { FaHome } from 'react-icons/fa'
import CustomLink from '../shared/CustomLink';

function Header(props){
    return (
        <header style={headerStyles}>
            <CustomLink path="/" style={{color:"#ffffff"}}>
                <FaHome size={50} style={{position: 'absolute', left: '10vw'}}/>
            </CustomLink>
            <h1>
                {props.codeLang} Quiz
            </h1>
        </header>
    );
};

const headerStyles = {
    backgroundColor: 'darkBlue',
    color: 'rgba(255, 255, 255, 1)',
    display: 'flex', 
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center', 
    textAlign: 'center'
}

export default Header
