import './styles/App.css';
import PicHeader from "./PicHeader";
import MixesFlexBox from "./MixesFlexBox";

function App() {
    return (
        <div className="App-Container">
            <PicHeader />
                <div className="topics-panel">Topics</div>
                <div className="main-panel">
                    Mixes
                    <MixesFlexBox />
                </div>
                <div className="ads-panel">Adverts</div>
                <div className="footer">Footer</div>
        </div>
    );
}

export default App;