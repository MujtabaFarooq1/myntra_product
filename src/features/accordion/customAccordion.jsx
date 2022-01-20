import React, { useState } from "react";

function CustomAccordion({ title, children }) {
  if (!title) {
    title = "Title Will Come Here";
  }
  if (!children) {
    children = (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quibusdam
        accusamus placeat quod sapiente impedit est, aut ad exercitationem
        consectetur, culpa consequatur nostrum optio quam facilis illo ratione a
        sit.
      </p>
    );
  }
  return <AccordionItem title={title}> {children} </AccordionItem>;
}

const AccordionItem = ({ title, children }) => {
  const [visibility, setVisiblity] = useState(false);

  const handleToggleVisibility = () => {
    setVisiblity((prev) => !prev);
  };

  return (
    <div>
      <button className="accordion__button" onClick={handleToggleVisibility}>
        {title}
        <span className={visibility ? "fas fa-minus" : "fas fa-plus"}></span>
      </button>
      <div className={`accordion__content ${visibility && "active"}`}>
        {children}
      </div>
    </div>
  );
};

export default CustomAccordion;
