import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Logo from "./index";

Enzyme.configure({ adapter: new Adapter() });

it("should display image logo", () => {
  const wrapper = shallow(<Logo />);
  expect(wrapper.containsMatchingElement(<img />)).toBe(true);
});
