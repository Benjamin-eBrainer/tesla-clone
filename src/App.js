import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { store } from './backend/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
      </Provider>
      <Home />
    </div>
  );
}

export default App;
