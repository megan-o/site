import React from "react";

export default function Resume() {
  return (
    <>
      <br />
      <iframe
        src={process.env.PUBLIC_URL + "/Megan-OBrien-Resume.pdf"}
        title="Megan O’Brien Resume"
        width="100%"
        height="480"
        allow="autoplay"
      ></iframe>
    </>
  );
}
