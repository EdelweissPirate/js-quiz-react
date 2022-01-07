import './App.css';
import Header from './components/Header'
import Main from './pages/Main'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App" style={{width: '100%', display:'flex', justifyContent: 'center', flexDirection: 'column', height: '100%'}}>
      <Header codeLang='JavaScript' />
      <Main codeLang='JavaScript' />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
