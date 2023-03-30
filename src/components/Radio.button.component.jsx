import React from "react";
import { EuiRadioGroup } from "@elastic/eui";

function RadioButton({ options,idSelected,handleGenderChange }) {
  return (
    <EuiRadioGroup
      options={options}
      idSelected={idSelected}
      onChange={(id) => handleGenderChange(id)}
      name="radio group"
    />
  );
}
export default RadioButton;
