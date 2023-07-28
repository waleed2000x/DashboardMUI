// import React from "react";
import styled from "styled-components";
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";

const Parent = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <Parent>
      <Sidebar />
      <Body />
    </Parent>
  );
}

export default App;
