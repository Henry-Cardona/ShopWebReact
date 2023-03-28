import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import GridProducts from './components/gridProducts.js';

function App() {
  return (
    <Provider className="App" store={store}>
      <GridProducts></GridProducts>
    </Provider>
  );
}

export default App;
