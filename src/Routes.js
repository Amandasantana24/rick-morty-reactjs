import React from 'react';
import { BrowserRouter as Router,
     Switch,
     Route
} from 'react-router-dom';
import Home from './Pagess/Home';
import Personagens from './Pagess/Personagens';
import Personagem from './Pagess/Personagem';
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
              <Route path="/personagem/:id">
                  <Personagem/>
              </Route> 
           </Switch>   
        </Router>  
    );
}
export default Routes;