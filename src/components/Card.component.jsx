import React from "react";
import { EuiCard } from "@elastic/eui";

function Cardcomponent({ title, body, footer }) {
  return <EuiCard title={title} description={body} footer={footer} />;
}

export default Cardcomponent;
