import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
    function MouseOver(event) {
        event.target.style.color = 'pink';
    }

    function MouseOut(event){
        event.target.style.color="#ffffff";
    }
    
    return (
        <button 
        type={type} 
        disabled={isDisabled} 
        // className={`btn btn-${version}`}
        style={buttonStyles}
        onMouseOver={MouseOver} 
        onMouseOut={MouseOut}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

const buttonStyles = {
    color: '#ffffff',
    backgroundColor: 'darkBlue',
    border: 'none',
    fontSize: '1.5rem',
    margin: '1.5rem',
    padding: '1.5rem 3rem',
    textDecoration: 'none',
    borderRadius: '1rem',
    width: '15rem',  
};

Button.propsType = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button
