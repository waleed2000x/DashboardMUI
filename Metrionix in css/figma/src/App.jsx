import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
const Parent = styled.div`
  display: flex;
`;
function App() {
  return (
    <Parent>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Body />
        </div>
      </div>
    </Parent>
  );
}

export default App;
