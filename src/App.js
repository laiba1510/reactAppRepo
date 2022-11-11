import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Hobby from './component/hobby';
import stars from './laiba.gif'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hobby/>
      
      <img src ={stars}/>
          </div>
  );
}

export default App;
