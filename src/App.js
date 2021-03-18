import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { View } from './styles/viewContainer';
import ExtraServices from './views/ExtraServices/ExtraServices';
import { useEffect } from 'react';
import { initGetCategories } from './views/ExtraServices/action';
import { useDispatch } from 'react-redux';

const GlobalStyles = createGlobalStyle`
* { 
    box-sizing: border-box;
    margin:0;
    font-family:  'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu';
  }
*:focus {
    outline: none;
}
`;

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initGetCategories())
  }, [])

  return (
    <Router>
      <GlobalStyles />
      <View>
        <Route exact path='/' component={ExtraServices} />
      </View>
    </Router>
  );
}

export default App;
