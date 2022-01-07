import { Link } from 'react-router-dom'

function CustomLink({ children, path, button, clickHandle }) {
    function MouseOver(event) {
        event.target.style.color = 'pink';
    }

    function MouseOut(event){
        event.target.style.color='#ffffff';
    }
    
    return (
        <Link to={path} onClick={clickHandle} style={button ? customLinkStyles1 : customLinkStyles2} onMouseOver={MouseOver} onMouseOut={MouseOut}>
            {children}
        </Link>
    )
}

const customLinkStyles1 = {
    color: '#ffffff',
    backgroundColor: 'darkBlue',
    border: 'none',
    fontSize: '1.5rem',
    margin: '1.5rem',
    padding: '1.5rem 3rem',
    textDecoration: 'none',
    borderRadius: '1rem',
    width: '10rem',  
};

const customLinkStyles2 = {
    backgroundColor: 'darkBlue',
    color: 'rgba(255, 255, 255, 1)',
    padding: 20, 
    display: 'flex', 
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center', 
    textAlign: 'center',
    textDecoration: 'none'
}

export default CustomLink
