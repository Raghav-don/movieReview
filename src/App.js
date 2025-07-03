import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import FeedbackForm from "./components/FeedBackForm";
import ReviewList from "./components/ReviewList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>🎬 Movie Feedback App</h1>
        <div className="navs">
        <nav className="nav-link">
          <Link to="/feedback">Give Feedback</Link>
         </nav>
          <nav className="nav-link">
          <Link to="/reviews">View Reviews</Link>
        </nav>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/feedback" />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/reviews" element={<ReviewList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App