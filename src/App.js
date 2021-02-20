import './App.css';
import Router from './router/index';
import {Button} from 'antd';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <a href="/home">home</a>
                <Button className="App-link">home</Button>
                <a href="/login">login</a>
                <Button className="App-link">login</Button>
            </header>
            <Router />
        </div>
    );
}

export default App;
