import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import HogwartsHouses from './HogwartsHouses';
import Characters from './Characters';

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/houses'>Houses</Link></li>
        <li><Link to='/characters'>Characters</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/houses' component={HogwartsHouses}/>
        <Route path='/characters' component={Characters}/>
      </Switch>
    </main>
)

const Home = () => (
    <div>
        <h1>Welcome, let the magic begin</h1>
    </div>
)

export default App;