import { useEffect, useState } from "react";
import Authentication from "./authentication/authentication";

function Content() {
  const [singedInAs, setSingedInAs] = useState(0);

  useEffect(() => {
    const singedInAs = "0";
    setSingedInAs(singedInAs);
  }, []);

  return singedInAs === "0" ? <Authentication /> : <p>hehehe signed in </p>;
}

export default Content;
