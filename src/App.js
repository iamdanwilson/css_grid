import './styles/App.css';
import PicHeader from "./PicHeader";
import MixesFlexBox from "./MixesFlexBox";
import ScrollingBanner from "./ScrollingBanner";

function App() {
    return (
        <div className="App-Container">
            <PicHeader />
                <div className="topics-panel">Topics</div>
                <div className="scrolling-panel">
                    <ScrollingBanner />
                </div>
                <div className="main-panel">
                    <MixesFlexBox />
                </div>
                <div className="ads-panel">Adverts</div>
                <div className="footer">Footer</div>
        </div>
    );
}

export default App;