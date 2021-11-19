import React from 'react';
import { BrowserRouter as Router,
     Switch,
     Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Personagens from './Pages/Personagens';
import Personagens from '.Pages/Personagens';

function Routes(){
    return(
        <Router>
          <Switch>
          <Route path="/" exact>
                  <Home/>
              </Route>
                  <Route path="/personagens">
                  <Personagens/>
              </Route> 
              <Router path="/personagem/:id">
                  <Personagem/>
              </Router> 
           </Switch>   
        </Router>  
    );
}
export default Routes;