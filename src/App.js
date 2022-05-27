import './styles/App.css';
import './components/MainFolderClicker'
import BigFolderClicker from './components/BigFolderClicker/BigFolderClicker.js';
import SmallFolderClicker from './components/SmallFolderClicker/SmallFolderClicker';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BigFolderClicker fileName="Me: " />
      </header>
    </div>
  );
}

export default App;
