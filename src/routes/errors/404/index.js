import { h, Component } from 'preact';
import style from './style';

export default class Error404 extends Component {
  render({ ...props }) {
    return (
      <div>
        <h1>404 Error</h1>
        <pre>{props.url}</pre>
        <span>Does not exist.</span>
      </div>
    );
  }
}
