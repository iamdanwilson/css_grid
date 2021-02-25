import './styles/App.css';
import PicHeader from "./PicHeader";
import MixesFlexBox from "./MixesFlexBox";

function App() {
    return (
        <div className="App-Container">
            <PicHeader />
                <div className="item2">advert</div>
                <div className="item3">
                    Mixes
                    <MixesFlexBox />
                </div>
                <div className="item4">footer</div>
        </div>
    );
}

export default App;