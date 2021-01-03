import React from "react";
import { render } from "@testing-library/react";

import TodoApp from "components/TodoApp";

describe("<TodoApp />", () => {
  it("renders TodoForm and TodoList", () => {
    const { getByTestId } = render(<TodoApp />);
    getByTestId("TodoForm"); // TodoForm 존재유무 확인
    getByTestId("TodoList"); // TodoList 존재유무 확인
  });

  it("renders two defaults todos", () => {
    const { getByText } = render(<TodoApp />);
    getByText("TDD 배우기");
    getByText("react-testing-library 사용하기");
  });
});
