import './App.css';
import './style.css';
import Header from './Header.js';
import AboutMe from './AboutMe.js';
import LinkButtons from './LinkButtons.js';
import Cat from './CatGIF.js';

function App() {
  return (
    <div className="App">
      <Header />
      <LinkButtons />
      <AboutMe />
      {/* <header className="App-header"></header>  */}
      <Cat />
      
    </div>
  );
}

export default App;
