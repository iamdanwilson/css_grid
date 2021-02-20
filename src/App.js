import './styles/App.css';
import DufcCrest from './images/dufc-crest.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello World!</p>
                <img src={DufcCrest} alt="dufc crest"/>
            </header>
        </div>
    );
}

export default App;