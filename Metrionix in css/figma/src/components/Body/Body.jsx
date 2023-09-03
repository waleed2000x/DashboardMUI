// import React from "react";
import styled from "styled-components";
import Stats from "./Stats";
import SectionA from "./SectionA";
import SectionB from "./SectionB";

const Parent = styled.div`
  background-color: #f3f6f9;
  min-height: 100vh;
`;

export default function Body() {
  return (
    <Parent>
      <Stats />
      <SectionA />
      <SectionB />
    </Parent>
  );
}
