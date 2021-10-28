import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from '@nitsan770/sneakers.pages.about';
import { Product } from '@nitsan770/sneakers.pages.product';
import { MThemeProvider } from '@nitsan770/marketing-brand.theme.m-theme-provider';

export function SneakersStore() {
  return (
    <Router>
      <MThemeProvider>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Product />
          </Route>
        </Switch>
      </MThemeProvider>
    </Router>
  );
}
