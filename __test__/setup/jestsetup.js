import { h } from "preact";
import render from "preact-render-to-string";
import { shallow, mount } from "enzyme";

global.h = h;
global.render = render;
global.mount = mount;
global.shallow = shallow;
// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};
