import { render, screen } from "@testing-library/react";
import React from "react";
import { CategoryList } from "./CategoryList";

test("Se renderiza una lista de categorias", () => {
  const categories = [
    {
      id: 1,
      name: "Categoria 1",
    },
    {
      id: 2,
      name: "Categoria 2",
    },
    {
      id: 3,
      name: "Categoria 3",
    },
  ];
  const renderResult = render(<CategoryList categories={categories} />);
  expect(renderResult.container).toMatchSnapshot();

  categories.forEach((category) =>
    expect(screen.getByText(category.name).tagName).toEqual("li")
  );

  /*
<ul>
    <li>sd</li
    <li>sd</li
</ul>
*/
});
