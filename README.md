# react-mediaquery-props
A React higher-order component that pass media queries props to components

## Installation

```
$ npm install react-mediaquery-props --save
```

## Description
A React higher-order components, [HOC](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775), is a function that receive a React Component and return an enhance version.

This module enhance components with prop `mq` object. Each key is a matchMedia `listener` name and value is a flag that reflect actual media query state. See [Bootstrap 4](https://github.com/bySabi/react-mediaquery-props/blob/master/src/bootstrap4-media-query.js) media queries included.

## API
On function call create a new Component and pass prop ´md´ with all registered media query listeners

`mediaQuery(Component, { mediaqueries })`

## Usage

```
import React from 'react';
import mediaQuery from 'react-mediaquery-props';
//Bootstrap 4 greater than 'medium' and 'extra small' media queries
import { mdUp, xs } from 'react-mediaquery-props/lib/bootstrap4-media-query.js';

const Navbar = mediaQuery(class Navbar extends React.Component {

  render() {

    const mdUp = this.props.mq.mdUp
      ? { id: 'header-nav', div: '', ul: 'pull-right' }   // medium Up
      : { id: 'mobile-nav', div: 'collapse neal-mobile-nav', ul: '' };

    const mobileNav = this.props.mq.xs ? '&#9776;' : '';

    return (
      <header className="neal-navbar-wrapper">
        <nav className="navbar-toggler"}>
          <div className="container">
            <button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse"
              data-target="#mobile-nav">
              {mobileNav}
            </button>
            <a className="navbar-brand hidden-sm-down" href="/">{this.props.brand}</a>
            <div className={`navbar-toggleable-sm ${mdUp.div}`} id={mdUp.id}>
              <ul className={`nav navbar-nav ${mdUp.ul}`}>
                {this.props.children}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}, { mdUp, xs });
```

## Included media queries
* Bootstrap 4[src](https://github.com/bySabi/react-mediaquery-props/blob/master/src/bootstrap4-media-query.js)

## Contributing
* Media queries definitions for other projects than already included
* Documentation improvement
* Feel free to send any PR

## Browser support
This module use [matchMedia](https://developer.mozilla.org/en/docs/Web/API/Window/matchMedia) API. For IE < 10, user must provide a `matchMedia` polyfill, Ex:
* [weblinc/media-match](https://github.com/weblinc/media-match)
* [paulirish/matchMedia.js](https://github.com/paulirish/matchMedia.js/)

## LICENSE
MIT
