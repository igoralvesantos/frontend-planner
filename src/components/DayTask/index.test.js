import React from "react";
import renderer from "react-test-renderer";
import { DayTask } from "./index";

it("Snapshot DayTask", () => {
  const tree = renderer.create(<DayTask day="" tasks={[]}></DayTask>).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="sc-bwzfXH eeNKNV"
    >
      <h3
        className="sc-bdVaJa geihCd"
      >
        
      </h3>
    </div>
  `);
});
