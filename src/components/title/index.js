import { h, Component } from "preact";
import style from "./style";

export default class Title extends Component {
  render({ name }) {
    return (
      <h1>
        {name}
      </h1>
    );
  }
}

Title.defaultProps = {
  name: "-",
};
