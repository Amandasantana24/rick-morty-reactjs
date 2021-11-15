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
              </Rout>
                  <Route path="/personagens">
                  <Personagens/>
              </Router>
              <Router path="/personagens/:id">
                  <Personagens/>
              </Router> 
           </Switch>   
        </Router>  
    );
}
export default Routes;