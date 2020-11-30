import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Slider from "./index";

Enzyme.configure({ adapter: new Adapter() });

it("Should display props", () => {
  const wrapper = shallow(<Slider name={"test"} percentage={10} />);
  const p = wrapper.find("p").first().text();
  expect(p).toBe("test: 10");
});
