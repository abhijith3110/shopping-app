import "./App.css";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category.jsx";
import Collections from "./components/Collections/Collections";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header";
import SubBanner from "./components/SubBanner/SubBanner.jsx";
import TopPicks from "./components/TopPicks/TopPicks.jsx";
import { ItemProvider } from "./layout/CollectionContext/CollectionContext.jsx";
import { CategoryProvider } from "./layout/Contexts/categoryContext.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <CategoryProvider>
                <ItemProvider>
                    <Collections />
                    <Category />
                    <TopPicks />
                </ItemProvider>
            </CategoryProvider>
            <SubBanner />
            <Footer />
        </div>
    );
}

export default App;
