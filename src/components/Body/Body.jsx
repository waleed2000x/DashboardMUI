import styled from "styled-components";
import Appbar from "../Appbar/Appbar";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
const Parent = styled.div`
  /* width: 90vw; */
`;

export default function Body() {
  return (
    <Parent>
      <Appbar />
      <Sidebar />
      <Dashboard />
    </Parent>
  );
}
