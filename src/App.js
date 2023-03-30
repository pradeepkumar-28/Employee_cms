import React from "react";
import { EuiPageTemplate } from "@elastic/eui";
import Cardcomponent from "./components/Card.component";

import Home from "./pages/Home";

export default ({
  button = <>Made by Pradeep</>,
  header,
  panelled,
  bottomBorder = false,
}) => {
  return (
    <EuiPageTemplate panelled={panelled} bottomBorder={bottomBorder}>
      {header && (
        <EuiPageTemplate.Header {...header} rightSideItems={[button]} />
      )}
      <EuiPageTemplate.Section grow={false} bottomBorder={bottomBorder}>
        <Cardcomponent title="Employee From" body={<Home />} />
      </EuiPageTemplate.Section>
      <EuiPageTemplate.Section>
        {<h1>Made by Pradeep</h1>}
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
};

// export default App;
