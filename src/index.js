import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import Weather from './components/Weather'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


const routing = (
    <BrowserRouter>
        <div> 
            <div> 
                    <ul>
                        <li>
                            <Link to="/Weather/March/20">Weather for March 20</Link>
                        </li>
                        <li>
                            <Link to="/Weather/March/21">Weather for March 21</Link>
                        </li>
                        <li>
                            <Link to="/Weather/March/22">Weather for March 22</Link>
                        </li>
                        <li>
                            <Link to="/Weather/March/23">Weather for March 23</Link>
                        </li>
                    </ul>     
            </div>

            <div> 
                <Route exact path="/" component={Home} />
                <Route path="/Weather/:month/:day" component={Weather} />
            </div>
            
        
        </div>
    </BrowserRouter> 
)


ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
