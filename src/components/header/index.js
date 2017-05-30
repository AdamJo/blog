import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <div class={style.container}>
          <nav>
            <Link activeClassName={style.active} href="/">⛶</Link>
          </nav>
          <nav>
            <Link activeClassName={style.active} href="/projects">
              Projects
            </Link>
            <Link activeClassName={style.active} href="/workshop">
              Workshop
            </Link>
            <Link activeClassName={style.active} href="/blog">Blog</Link>
          </nav>
        </div>
      </header>
    );
  }
}
