import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ endpoint: { title, items }, ifExists }) => {
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center 
           gap-25 lg:gap-19 mt-7 md:gap-19
           ${
             ifExists
               ? "md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1"
               : "lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
           }`}
        >
          {items?.map((item, i) => (
            <Item item={item} key={i} ifExists />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
