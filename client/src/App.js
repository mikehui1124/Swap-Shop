import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import MyHeader from "./component/MyHeader";
import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";
import InstantMessenger from "./pages/instantmessenger/InstantMessenger";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProductPage";
import SwapProduct from "./pages/SwapProductPage";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <MyHeader />
          <div id="mainBG">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/DashBoard" element={<DashBoard />} />
              <Route exact path="/SignUp" element={<SignUp />} />
              <Route exact path="/Login" element={<Login />} />
              <Route
                exact
                path="/InstantMessenger"
                element={<InstantMessenger />}
              />
              <Route exact path="/AddProduct" element={<AddProduct />} />
              <Route exact path="/SwapProduct" element={<SwapProduct />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
