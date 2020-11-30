import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Paginate from "./index";

Enzyme.configure({ adapter: new Adapter() });

it("Should display arrows", () => {
  const wrapper = shallow(<Paginate />);
  expect(wrapper.containsMatchingElement(<i />)).toBe(true);
});
