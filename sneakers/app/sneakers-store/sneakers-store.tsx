import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from '@nitsan770/sneakers.pages.about';
import { Product } from '@nitsan770/sneakers.pages.product';

export function SneakersStore() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}
