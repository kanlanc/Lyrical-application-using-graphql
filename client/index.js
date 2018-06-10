import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import { HashRouter as Router, Route } from "react-router-dom";

import "./style/style.css"

const client = new ApolloClient({
  dataIdFromObject: o=> o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Route exact path="/" component={SongList} />
          <Route exact path="/addsong" component={SongCreate} />
          <Route exact path="/songdetail/:id" component={SongDetail} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
