import React from "react";
import renderer from "react-test-renderer";
import { Planner } from "./index";

it("Snapshot Planner", () => {
  const tree = renderer
  .create(<Planner tasks={[]}></Planner>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
