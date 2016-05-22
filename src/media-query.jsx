import React from 'react';

const mediaQuery = (C, queries) =>
  class _mediaQuery extends React.Component {

    state = {};
    _mqList = new Map();

    _onMatch = () => this._mqList.forEach((mql, key) =>
      this.state[key] !== mql.matches && this.setState({ [key]: mql.matches }));

    componentWillMount() {
      Object.keys(queries).forEach(key => {
        const mql = window.matchMedia(queries[key]);
        mql.addListener(this._onMatch);

        this._mqList.set(key, mql);

        // Init state without rerender
        this.state[key] = false;
      });

      // set initial media queries state
      this._onMatch();
    }

    componentWillUnmount() {
      this._mqList && this._mqList.forEach(mql => mql.removeListener(this._onMatch));
    }

    render() {
      return <C {...this.props} mq={this.state}/>;
    }
  }

export default mediaQuery;
