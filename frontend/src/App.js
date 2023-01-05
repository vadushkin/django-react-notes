import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import './App.css';
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import Header from "./components/UI/header/Header";

function App() {
    return (
        <Router>
            <div className="container dark">
                <div className="app">
                    <Header/>
                    <Route path="/" exact component={NotesListPage}/>
                    <Route path="/note/:id" component={NotePage}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
