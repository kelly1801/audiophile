import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const { categories } = useSelector((state) => state.categories);
  const [categoryArr, setCategory] = useState([]);
  useEffect(() => {
    const filteredCat = categories.filter((categories) => categories.category === category)
    setCategory(...filteredCat);
  }, [category]);

console.log(categoryArr)
  return (
    <>
      <h2>{categoryArr.category}</h2>
    </>
  );
};

export default CategoryPage;
