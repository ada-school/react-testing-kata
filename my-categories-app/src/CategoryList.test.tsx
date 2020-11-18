import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { CategoryList } from "./CategoryList";
import { Category } from "./models";

test("Se renderiza una lista de categorias", () => {
  const categories: Array<Category> = [
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
    expect(screen.getByText(category.name).tagName).toEqual("LI")
  );
});

// hacer click
// mostrar las subcategorias
// mostrar las seleccionada

test("Cuando se hace click en la categoria, se llama a la funcion onCategoryClick", () => {
  const mockOnCategoryClick = jest.fn();
  const categories: Array<Category> = [
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

  render(
    <CategoryList
      categories={categories}
      onCategoryClick={mockOnCategoryClick}
    />
  );

  const chosenCategory = screen.getByText(categories[0].name);
  fireEvent.click(chosenCategory);

  expect(mockOnCategoryClick).toHaveBeenCalled();
});
