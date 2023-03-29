import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import GridProducts from './components/gridProducts.js';

function App() {
  return (
    <Provider className="App" store={store}>
      {<GridProducts></GridProducts>}
    </Provider>
  );
}

export default App;
