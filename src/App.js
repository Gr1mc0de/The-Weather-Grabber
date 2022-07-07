import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Logo from './i/weather-grabber.png';

export default function App() {
  return (
    <div>
      <Header Logo={Logo}/>
      <Main/>
      <Footer Logo={Logo}/>
    </div>
  );
}
