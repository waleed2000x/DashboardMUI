import styled from "styled-components";
import Topbar from "./Topbar/Topbar";
import Bottombar from "./BottomBar/Bottombar";

const Parent = styled.div`
  position: fixed;
  height: 120px;
  width: 90vw;
  background-color: white;
`;

export default function Appbar() {
  return (
    <Parent>
      <Topbar />
      <Bottombar />
    </Parent>
  );
}
