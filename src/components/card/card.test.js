import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./index";

Enzyme.configure({ adapter: new Adapter() });

it("Should display loading", () => {
  const wrapper = shallow(<Card />);
});
