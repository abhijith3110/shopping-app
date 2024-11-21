import "./App.css";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category.jsx";
import Collections from "./components/Collections/Collections";
import Header from "./components/Header/Header";
import SubBanner from "./components/SubBanner/SubBanner.jsx";
import TopPicks from "./components/TopPicks/TopPicks.jsx";
import { ItemProvider } from "./layout/CollectionContext/CollectionContext.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <ItemProvider>
                <Collections />
                <Category />
                <TopPicks />
            </ItemProvider>
            <SubBanner />
        </div>
    );
}

export default App;
