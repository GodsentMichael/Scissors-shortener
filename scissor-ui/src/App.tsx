// import HomeContainer from './containers/Home';
// import  HandleRedirectContainer from './containers/HandleRedirect';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// function App() {
// 	return ( <Router>
//     <Switch>
//       <Route exact path="/"> 
// 	<HomeContainer />
//     </Route>
//     <Route exact path="/:shortId"> 
//     <HandleRedirectContainer/>
//     </Route>
//     </Switch>
//     </Router>
// 	);
// }

// export default App;

import HomeContainer from './containers/Home';
import HandleRedirectContainer from './containers/HandleRedirect';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/:shortId" element={<HandleRedirectContainer />} />
      </Routes>
    </Router>
  );
}

export default App;

