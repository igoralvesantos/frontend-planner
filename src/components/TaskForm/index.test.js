import React from "react";
import renderer from "react-test-renderer";
import { TaskForm } from "./index";

it("Snapshot TaskForm", () => {
  const tree = renderer
  .create(<TaskForm day="" text="" onChange={()=>{}} onSubmit={()=>{}}></TaskForm>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
