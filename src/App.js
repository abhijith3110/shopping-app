import "./App.css";
import Banner from "./components/Banner/Banner";
import Collections from "./components/Collections/Collections";
import Header from "./components/Header/Header";
import { ItemProvider } from "./layout/CollectionContext/CollectionContext.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <ItemProvider>
                <Collections />
            </ItemProvider>
        </div>
    );
}

export default App;
