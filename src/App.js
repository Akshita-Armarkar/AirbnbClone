import Navbar from './components/Navbar/Navbar';
import './App.css';
import Section from './components/Section/Section';
import Card from './components/Card/Card';

function App() {
  return (
    <div className='container'>
     <Navbar/>
     <Section/>
     <div className='cards'>
     <Card/>
     </div>
    </div>
  );
}

export default App;
