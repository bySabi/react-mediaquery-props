import React from 'react';

const mediaQuery = (C, querys) =>
  class _mediaQuery extends React.Component {

    state = {};
    mql = new Map();

    componentWillMount() {
      for (let key in querys) {
        const query = querys[key];
        const mql = window.matchMedia(query);

        mql.addListener(this._onMatch);
        this.mql.set(key, mql);
      }

      this._onMatch(null);
    }

    _onMatch = (mql) => {
      this.mql.forEach((mql, key) => this.setState({[key]: mql.matches}));
    }

    componentWillUnmount() {
      this.mql && this.mql.forEach(mql => mql.removeListener(this._onMatch));
    }

    render() {
      return <C {...this.props} mq={this.state}/>;
    }
  }

export default mediaQuery;
