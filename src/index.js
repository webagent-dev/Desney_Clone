import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import  Header from './comps/Header'
import './app.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store'
import Home from './comps/Home'
import PageId from './comps/PageId'

ReactDom.render(
    <Provider store={store}>
    <Router>
    <Header />
        <Switch>
           <Route exact  path='/' component={App}/>
           <Route  exact path='/home'  component={Home}/>
           <Route exact path='/pageid/:id'  component={PageId}/>
        </Switch>
    </Router>
    </Provider>,
document.getElementById('root')
)