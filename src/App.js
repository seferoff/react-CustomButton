
import './App.css';
import CustomButton from './components/CustomButton/CustomButton.js';

function App() {
  return (
    <div className="App">
      <CustomButton/>
      <CustomButton backgroundColor='yellow'/>
      <CustomButton backgroundColor='blue'/>
    </div>
  );
}

export default App;
