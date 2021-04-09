import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import * as pages from './pages';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={pages.HomePage}/>
                <Route exact path="/profiles" component={pages.ListProfile}/>
                <Route exact path="/profiles/add" component={pages.AddProfile}/>
                <Route exact path="/profile/edit/:id" component={pages.UpdateProfile}/>
            </Switch>
        </BrowserRouter>
    )
}