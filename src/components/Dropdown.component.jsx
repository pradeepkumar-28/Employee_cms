import React from "react";
import { EuiSelect, useGeneratedHtmlId } from "@elastic/eui";

function Dropdowncomponent({ options, value, name, handleInputChange }) {
  const basicSelectId = useGeneratedHtmlId({ prefix: "basicSelect" });

  return (
    <EuiSelect
      id={basicSelectId}
      options={options}
      value={value}
      name={name}
      onChange={(e) => handleInputChange(e)}
      aria-label="Use aria labels when no actual label is in use"
    />
  );
}

export default Dropdowncomponent;
