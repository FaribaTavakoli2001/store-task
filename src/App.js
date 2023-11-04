import './App.css';
import Store from './components/Store';

import ProductsContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <Store />
    </ProductsContextProvider>
  );
}

export default App;
