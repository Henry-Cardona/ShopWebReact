import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import MainScreen from './components/MainScreen';
import GridProducts from './components/GridProducts.js';
//import CardProduct from './components/CardProduct.js';

function App() {
  return (
    <Provider className="App" store={store}>
      {<MainScreen></MainScreen>}
      {<GridProducts></GridProducts>}
    </Provider>
  );
}

export default App;
