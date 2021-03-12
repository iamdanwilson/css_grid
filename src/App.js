import './styles/App.css';
import PicHeader from "./PicHeader";
import MixesFlexBox from "./MixesFlexBox";
import ScrollingBanner from "./ScrollingBanner";
import HoverNavBar from "./hover-nav-bar";

function App() {
    return (
        <div className="App-Container">
            <div className="header">
            <PicHeader/>
            </div>
            <div className="topics-panel">
                <HoverNavBar />
            </div>
            <div className="scrolling-panel">
                <ScrollingBanner/>
            </div>
            <div className="main-panel">
                <MixesFlexBox/>
            </div>
            <div className="ads-panel">Adverts</div>
            <div className="footer">Footer</div>
        </div>
    );
}

export default App;