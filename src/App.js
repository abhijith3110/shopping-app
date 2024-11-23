import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category.jsx";
import Collections from "./components/Collections/Collections";
import SubBanner from "./components/SubBanner/SubBanner.jsx";
import TopPicks from "./components/TopPicks/TopPicks.jsx";
import "./App.css";

function App() {
    return (
        <div className="App">

            <Banner />
            <Collections />
            <Category />
            <TopPicks />
            <SubBanner />

        </div>
    );
}

export default App;
