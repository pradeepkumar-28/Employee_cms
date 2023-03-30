import React from "react";
import { EuiFieldText } from "@elastic/eui";

function Inputcomponent({ name, value, handleInputChange, placeholder }) {
  return (
    <EuiFieldText
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={(e) => handleInputChange(e)}
      aria-label="Use aria labels when no actual label is in use"
    />
  );
}

export default Inputcomponent;
