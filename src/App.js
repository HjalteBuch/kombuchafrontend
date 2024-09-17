import './App.css';
import Batches from './pages/batches';
import Bottles from './pages/bottles';
import Reviews from './pages/reviews';
import ReviewCreation from './pages/BottleReviewCreation';
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
                <Route path="/bottle/:bottleName/review" element={<ReviewCreation/>} />
            </Routes>
        </Router>
    );
}

export default App;
