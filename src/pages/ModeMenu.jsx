import menuOptions from "../data/menuOptions";


function ModeMenu() {
    return (
        <section style={{backgroundColor: 'lightBlue', color: 'rgba(0, 0, 0, 1)', padding: 20}}>
        <h3>
            Choose game mode
        </h3>

        <ul style={listButtonStyles}>
            {menuOptions[2].map((item, i) => (
            <button key={item.id} onClick={() => {console.log(item.title)}}>{item.title}</button>
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

export default ModeMenu