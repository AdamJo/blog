import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Title from './title';
import Home from '../routes/home';
import Projects from '../routes/projects';
import Workshop from '../routes/workshop';
import Blog from '../routes/Blog';
import Error404 from '../routes/errors/404';

import { titleOptions } from '../lib/helpers';

import style from './style';

export default class App extends Component {
  /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  handleRoute = e => {
    this.currentUrl = e.url;
    this.setState({
      title: this.currentUrl,
    });
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <Header />
        <main class={style.container}>
          <Title name={titleOptions[this.state.title]} />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Projects path="/projects" />
            <Workshop path="/workshop" />
            <Blog path="/blog" />
            <Error404 default />
          </Router>
        </main>
      </div>
    );
  }
}
