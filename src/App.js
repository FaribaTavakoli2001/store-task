import './App.css';
import Store from './components/Store';
import { Switch , Route , Redirect } from 'react-router-dom';
import ProductsDitails from './components/ProductsDitails';

import ProductsContextProvider from './context/ProductContextProvider';

function App() {
  return (
    
      <ProductsContextProvider>
      <Switch>
       <Route path='/products/:id' component={ProductsDitails}/>
       <Route path='/products' component={Store} />
      <Redirect to='/products' />
       </Switch>
    </ProductsContextProvider>
    
    
  );
}

export default App;
