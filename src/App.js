import './App.css';
import Navigation from './components/navigationBar';
import Headers from "./components/headerComponent";
import Main from './components/mainComponent';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
          <Navigation />
          <hr />
          <Headers />
          <Main />
          <Footer />
    </div>
  );
}

export default App;
