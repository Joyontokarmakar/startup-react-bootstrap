import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div class="container">
      <div className="shadow p-5 rounded">
        <h1>Hi, This is React-Bootstrap</h1>
        <Button variant="primary">Hi i am a button</Button>
      </div>
    </div>
  );
}

export default App;
