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

