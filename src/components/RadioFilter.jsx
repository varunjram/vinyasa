import { RadioButton } from "primereact/radiobutton";
import React from "react";

function RadioFilter({ Heading, Categories, InitialValue, onChange }) {
  return (
    <div className="card  justify-content-center">
      <p>{Heading}</p>
      <div className="flex flex-column gap-1">
        {Categories.map((category) => {
          return (
            <div
              key={category.id}
              className="flex align-items-center">
              <RadioButton
                inputId={category.id}
                name="category"
                value={category}
                onChange={onChange}
                checked={InitialValue.id === category.id}
              />
              <label
                htmlFor={category.id}
                className="ml-2">
                {category.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RadioFilter;
