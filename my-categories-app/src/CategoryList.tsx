import React from "react";

interface CategoryListProps {
  categories: ReadonlyArray<any>;
}

export const CategoryList: React.FC<CategoryListProps> = () => {
  return <div style={{ color: "red" }} />;
};
