import logo from "./logo.svg";
import "./App.css";
import { Button } from "./stories/Button";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Button label="Test Button" primary="true" />
            </header>
        </div>
    );
}

export default App;
