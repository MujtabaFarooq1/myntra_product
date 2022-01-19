import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function SidenavCategories({ customCategories }) {
  if (!customCategories) {
    return <p> No Further categories found! </p>;
  }

  const categoriesToRender =
    customCategories.length > 5
      ? customCategories.slice(0, 5)
      : customCategories;

  return (
    <div>
      {categoriesToRender.map((category) => (
        <div key={uuidv4()} className="sideNavCategoryContainer">
          <label>
            <input type="checkbox" />
            {category}
          </label>
        </div>
      ))}

      {customCategories?.length > 5 && (
        <Link to={"/"} style={{ fontSize: "1.45rem", marginLeft: "1.5rem" }}>
          + {customCategories.length - 5} more
        </Link>
      )}
    </div>
  );
}

export default SidenavCategories;
