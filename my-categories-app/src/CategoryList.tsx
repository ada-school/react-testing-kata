import React, { useCallback } from "react";
import { Category } from "./models";

interface CategoryListProps {
  categories: ReadonlyArray<Category>;
  onCategoryClick?: (category: Category) => void;
}

// function currying

// const a = (b:string) => { return (c:string)=> b + c}

// const f = (a:string, b:string) => a+b;

// const toReuse = a("santiago")
// const result = toReuse("carrillo") // santiago carrillo

// const result3 = toReuse("barbosa") // santiago barbosa

// const result2 = f("santiago","carrillo")

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onCategoryClick,
}) => {
  const handleCategoryClick = (category: Category) => (e: React.MouseEvent) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  const categoryItems = categories.map((category) => (
    <li key={category.id} onClick={handleCategoryClick(category)}>
      {category.name}
    </li>
  ));
  return <ul>{categoryItems}</ul>;
};
