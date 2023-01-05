import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import './App.css';
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={NotesListPage}/>
                <Route path="/note/:id" component={NotePage}/>
            </div>
        </Router>
    );
}

export default App;
