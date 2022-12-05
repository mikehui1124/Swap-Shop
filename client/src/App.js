import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



import MyHeader from './component/MyHeader';
import DashBoard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div>
        <MyHeader/>
        <div id="mainBG">
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/DashBoard" element={<DashBoard />} />
              <Route exact path="/SignUp" element={<SignUp/>} />
              <Route exact path="/Login" element={<Login/>} />

          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;

