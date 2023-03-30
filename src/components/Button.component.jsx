import React from "react";
import { EuiButton } from "@elastic/eui";

function Buttoncomponent({ title, type, onButtonClickHandler, disabled }) {
  return (
    <EuiButton
      type={type}
      disabled={disabled}
      fill
      onClick={(e) => onButtonClickHandler(e)}
    >
      {title}
    </EuiButton>
  );
}

export default Buttoncomponent;
