import './App.css';
import Batches from './pages/batches';
import Bottles from './pages/bottles';
import Reviews from './pages/reviews';
import Navigation from './components/Navigation';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Navigation />

            <Routes>
                <Route path="/batches" element={<Batches/>} />
                <Route path="/bottles" element={<Bottles/>} />
                <Route path="/reviews" element={<Reviews/>} />
            </Routes>
        </Router>
    );
}
        //<div className="App">
            //<Navigation />
        //</div>

export default App;
