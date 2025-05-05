import { useState } from "react";
import Checkbox from "./Checkbox";

function ParentComponent() {
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

  const handleAcceptTerms = () => {
    setHasAcceptedTerms(!hasAcceptedTerms);
  };

  return (
    <Checkbox
      name="acceptedTerms"
      label="This is a checkbox"
      onChange={handleAcceptTerms}
      checked={hasAcceptedTerms}
    />
  );
}

export default ParentComponent;
