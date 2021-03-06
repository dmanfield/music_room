import React, { Component } from 'react';
import CreateRoom from './CreateRoom';
import RoomJoin from './RoomJoin';
import Room from './Room';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<Router>
      <Switch>
        <Route exact path='/' ><p>This is the home page</p></Route>
        <Route path='/join' component={RoomJoin}></Route>
        <Route path='/create' component={CreateRoom}></Route>
        <Route path='/room/:roomCode' component={Room}></Route>
      </Switch>
    </Router>)
  }
}

