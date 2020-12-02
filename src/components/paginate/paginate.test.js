import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Paginate from "./index";

Enzyme.configure({ adapter: new Adapter() });

it("Should display arrows", () => {
  const wrapper = shallow(<Paginate />);
  expect(wrapper.containsMatchingElement(<i />)).toBe(true);
});
it("should trigger getPervPage", () => {
  const wrapper = shallow(<Paginate />);
  const prevPage = wrapper.find("i").first();
  prevPage.simulate("click");
  //verificar como cambia la prop
});

it("should trigger getNextPage", () => {
  const wrapper = shallow(<Paginate />);
  const nextPage = wrapper.find("i").last();
  nextPage.simulate("click");
  //verificar como cambia la prop
});
