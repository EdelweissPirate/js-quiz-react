import React from 'react'
import './App.css';

function Header(props){
    return (
      <header style={{backgroundColor: 'darkBlue', color: 'rgba(0, 0, 0, 1)', padding: 20, height:75}}>
        <h1>
          {props.codeLang} Quiz
        </h1>
      </header>
    );
};

function Main(props){
  const buttonStyles = {
    color: '#ffffff',
    backgroundColor: 'darkBlue',
    border: 'solid 3px transparent',
    fontSize: '1.5rem',
    margin: '1.5rem',
    padding: '1.5rem 3rem',
    textDecoration: 'none',
    borderRadius: '1rem',
    width: '30%',
    flexItem: 'center',
    // fontFamily: 'times new roman'
  };

  const listButtonStyles = {
    listStyle: 'none', 
    display: 'flex', 
    justifyContent:'center', 
    flexDirection:'column', 
    alignItems: 'center', 
    padding: 0,
  };

  return (
    <section style={{backgroundColor: 'lightBlue', color: 'rgba(0, 0, 0, 1)', padding: 20}}>
      <h3>
        Test your {props.codeLang} Knowledge
      </h3>

      <ul style={listButtonStyles}>
        {props.mainMenu.map((item, i) => (
          <button key={item.id} style={buttonStyles}>{item.title}</button>
        ))}
      </ul>
    </section>
  );
};

function Footer(props){
  return (
    <footer style={{backgroundColor: 'darkBlue'}}>
      <h4>
        TEST YOUR MIGHT
      </h4>
      <div style={{display:'flex', justifyContent: 'flex-end', padding: 20}}>
        <h5>
          Copyright {props.year}
        </h5>
        <a href='https://github.com/EdelweissPirate' target="_blank" rel="noopener noreferrer">
        <img src="https://github.com/EdelweissPirate.png" alt='missing logo' height={50}/>
        </a>
      </div>
    </footer>
  );
};

const mainMenu = [
  'START',
  'SCORES',
  'RESET'
];

const mainMenuObjects = mainMenu.map((item, i) => ({ id: i, title: item }));

function App() {
  return (
    <div className="App" style={{width: '100%', display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <Header codeLang='JavaScript' />
      <Main codeLang='JavaScript' mainMenu={mainMenuObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
